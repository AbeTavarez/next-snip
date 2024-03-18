"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";

/**
 * Edit Snippet
 * @param id
 * @param code
 */
export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

/**
 * Delete Snippet
 * @param id
 */
export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath('/');
  redirect("/");
}

/**
 * Create Snippet
 * @param formState
 * @param formData
 */
export async function createSnippet(
  formState: { message: string },
  formData: FormData,
) {
  try {
    // form values
    const title = formData.get("title");
    const code = formData.get("code");

    // validation
    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer.",
      };
    }

    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer.",
      };
    }

    // create record
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);
    // throw new Error("Failed to save to database");
    
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
        return {message: 'Something went wrong...'}
    }

  }

  revalidatePath('/');
  redirect("/");
}
