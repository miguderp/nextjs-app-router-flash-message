import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
	async function action(data: FormData) {
		"use server";

		cookies().set({
			name: "flash-message",
			value: `${data.get("message")}`,
			httpOnly: true,
			path: "/",
		});

		redirect("/page-receiving-flash-message");
	}

	return (
		<form
			action={action}
			className="space-y-3 flex flex-col max-w-3xl mx-auto my-12"
		>
			<label htmlFor="message">Message</label>
			<input
				type="text"
				name="message"
				id="message"
				className="border border-gray-400 rounded px-2 py-1"
			/>

			<p>
				By submitting this form, you create a cookie that is intercepted
				by the middleware but its content is still sent to the other
				page and displayed.
			</p>

			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
			>
				Send
			</button>
		</form>
	);
}
