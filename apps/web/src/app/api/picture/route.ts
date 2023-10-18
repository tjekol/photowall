// 97u2fmo5.api.sanity.io requests
// 97u2fmo5.apicdn.sanity.io api CDN cache endpoint

// API: https://97u2fmo5.api.sanity.io/v2023-10-09/data/query/production
// API CDN: https://97u2fmo5.apicdn.sanity.io/v2023-10-09/data/query/production

// https://97u2fmo5.api.sanity.io/v2023-10-09/data/query/production?query=*[_type=="picture"]|order(_createdAt%20desc)
// https://97u2fmo5.api.sanity.io/v2023-10-09/data/query/production?query=*[_type=="picture"]|order(_createdAt%20desc)



import { NextResponse } from 'next/server';

const PICTURE_API_URL = 'https://memories-tjekol.vercel.app/api/picture';

fetch(PICTURE_API_URL)
  .then((response) => response.json())
  .then((data) => console.log(data));


// export function GET(request: Request) {
//   return NextResponse.json({
//     message: 'i am trying to send a fucking image', request,
//   });
// }