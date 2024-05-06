import { cookies } from "next/headers";
import Link from "next/link";

export default function Page() {
	return (
		<div className="space-y-3 flex flex-col max-w-3xl mx-auto my-12">
			<p>
				This page should display the message you sent if you’ve used the
				form.
			</p>

			<p>
				If you reload the page, the cookie will not be there anymore and
				thus the message will not be displayed.
			</p>

			{cookies().get("flash-message")?.value && (
				<div className="bg-green-500 text-white p-5 rounded">
					{cookies().get("flash-message")!.value}
				</div>
			)}

			<p className="block underline underline-offset-2">
				<Link href="/">← Go back to home</Link>
			</p>
		</div>
	);
}
