// import { NextRequest, NextResponse } from 'next/server';
// import { v2 as cloudinary } from 'cloudinary';
// import { auth } from '@clerk/nextjs/server';

// // Configuration
// cloudinary.config({
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
// });

// interface CloudinaryUploadResult {
//     public_id: string;
//     [key: string]: any
// }

// export async function POST(request: NextRequest) {
//     const {userId} = auth()

//     if (!userId) {
//         return NextResponse.json({error: "Unauthorized"}, {status: 401})
//     }

//     try {
//         const formData = await request.formData();
//         const file = formData.get("file") as File | null;

//         if(!file){
//             return NextResponse.json({error: "File not found"}, {status: 400})
//         }

//         const bytes = await file.arrayBuffer()
//         const buffer = Buffer.from(bytes)

//         const result = await new Promise<CloudinaryUploadResult>(
//             (resolve, reject) => {
//                 const uploadStream = cloudinary.uploader.upload_stream(
//                     {folder: "next-cloudinary-uploads"},
//                     (error, result) => {
//                         if(error) reject(error);
//                         else resolve(result as CloudinaryUploadResult);
//                     }
//                 )
//                 uploadStream.end(buffer)
//             }
//         )
//         return NextResponse.json(
//             {
//                 publicId: result.public_id
//             },
//             {
//                 status: 200
//             }
//         )

//     } catch (error) {
//         console.log("UPload image failed", error)
//         return NextResponse.json({error: "Upload image failed"}, {status: 500})
//     }

// }

import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { auth } from '@clerk/nextjs/server';

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CloudinaryUploadResult {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    [key: string]: any;
}

export async function POST(request: NextRequest) {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded. Please upload an image." }, { status: 400 });
        }

        const validFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validFileTypes.includes(file.type)) {
            return NextResponse.json({ error: "Invalid file type. Only JPEG, PNG, and GIF are allowed." }, { status: 400 });
        }

        // Limit file size to 10 MB
        const maxSize = 10 * 1024 * 1024; // 10 MB
        if (file.size > maxSize) {
            return NextResponse.json({ error: "File too large. Max size is 10MB." }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Cloudinary upload
        const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "next-cloudinary-uploads" },
                (error, result) => {
                    if (error) {
                        console.error("Cloudinary upload error:", error);
                        return reject(error);
                    }
                    console.log("Cloudinary result:", result);
                    return resolve(result as CloudinaryUploadResult);
                }
            );
            uploadStream.end(buffer);
        }).catch(error => {
            console.error("Failed to upload image:", error);
            throw error;
        });
        

        return NextResponse.json(
            {
                publicId: result.public_id,
                url: result.secure_url,
                width: result.width,
                height: result.height
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Upload image failed:", error);
        return NextResponse.json({ error: "Upload image failed" }, { status: 500 });
    }
}


