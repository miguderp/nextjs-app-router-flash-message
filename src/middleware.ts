import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware() {
	const res = NextResponse.next();

	if (cookies().get("flash-message") !== undefined) {
		res.cookies.set({
			name: "flash-message",
			value: "",
			expires: new Date(Date.now() - 1000),
		});
	}

	return res;
}
