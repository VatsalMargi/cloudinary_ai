import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { auth } from '@clerk/nextjs/server';

// Configuration
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CloudinaryUploadResult {
    public_id: string;
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

        // Log the file data
        console.log("File data:", file);

        if (!file) {
            return NextResponse.json({ error: "File not found" }, { status: 400 });
        }

        // Optional: Check for valid image types
        const validFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validFileTypes.includes(file.type)) {
            return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Cloudinary upload as a promise
        const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "next-cloudinary-uploads" },
                (error, result) => {
                    if (error) {
                        console.error("Cloudinary upload error:", error);
                        return reject(error);
                    }
                    return resolve(result as CloudinaryUploadResult);
                }
            );
            uploadStream.end(buffer);
        });

        return NextResponse.json(
            {
                publicId: result.public_id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Upload image failed:", error);
        return NextResponse.json({ error: "Upload image failed" }, { status: 500 });
    }
}
