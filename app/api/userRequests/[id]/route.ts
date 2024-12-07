import { getData } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
	try {		
		const data = await getData();
		const user = data.userRequests.find(user => user.id === params.id);
		if(!user){
			return NextResponse.json({ }, { status: 404 });
		}
		return Response.json(user)
	} catch (error) {
		console.error('Error in GET user request:', error);
		return NextResponse.json({ }, { status: 500 });
	}
}
