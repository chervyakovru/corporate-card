import { getData } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET() {
	try {		
		const data = await getData();
    return Response.json(data.users)
	} catch (error) {
		console.error('Error in GET users:', error);
		return NextResponse.json({ }, { status: 500 });
	}
}
