export interface UploadedFileInfo {
  name: string;
  url: string;
}

async function getUploadedFileInfo(file: File): Promise<UploadedFileInfo> {
  const filename = file.name;

  // 1. Pre-signed URL olish
  const presignRes = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/generate-presigned-url/?filename=${encodeURIComponent(filename)}&expiration=3600`
  );

  if (!presignRes.ok) {
    throw new Error('Presigned URL olishda xatolik yuz berdi');
  }

  const { presigned_url } = await presignRes.json();

  // 2. Faylni S3 ga yuklash
  const uploadRes = await fetch(presigned_url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type || 'application/octet-stream',
    },
  });

  if (!uploadRes.ok) {
    throw new Error('Faylni yuklashda xatolik yuz berdi');
  }

  // 3. Fayl nomi va URL’ni qaytarish
  return {
    name: filename,
    url: presigned_url.split('?')[0], // URL’ni query params’larsiz beramiz
  };
}

export default getUploadedFileInfo;
