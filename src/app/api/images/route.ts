// src/app/api/images/route.ts
import { NextResponse } from 'next/server';
import { createApi } from 'unsplash-js';

// Initialize Unsplash API client
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY || '',
});

const FALLBACK = (q: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(q)}/800/800`;


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  if (!process.env.UNSPLASH_ACCESS_KEY) {
    return NextResponse.json({ error: 'Unsplash API key is not configured' }, { status: 500 });
  }

  try {
    const result = await unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: 1,
      orientation: 'squarish',
    });

    if (result.errors) {
      console.error('Unsplash API error:', result.errors[0]);
      return NextResponse.json({ error: 'Failed to fetch image from Unsplash' }, { status: 500 });
    }

    const photo = result.response?.results[0];
    if (photo) {
      return NextResponse.json({ url: photo.urls.regular });
    } else {
      return NextResponse.json({ url: null }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
