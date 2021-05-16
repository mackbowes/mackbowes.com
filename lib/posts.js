import fs from "fs";
import path from "path";
import matter from "gray-matter";

//Finding directory named "posts" from the current working directory of Node.

const postDirectory = path.join(process.cwd(), "posts");

export const getSortedPosts = () => {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

	const fullPath = path.join(postDirectory, filename);
    //Extracts contents of the MDX file
	const fileContents = fs.readFileSync(fullPath, "utf8");
	// Converts
    const { data } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-US",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    return {
      slug,
      ...frontmatter,
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};


// Gets slugs
export const getAllPostSlugs = () => {
	// gets the name of every file in 'postDirectory'
	const fileNames = fs.readdirSync(postDirectory);

	// iterates through them and returns the result from this function
	return fileNames.map((filename) => {
		return {
			params: {
				// passes slug as param. the filename without the extension
				slug: filename.replace('.mdx', '')
			}
		}
	})
}

// Gets posts based on slug
export const getPostData = async (slug) => {
	const fullPath = path.join(postDirectory, `${slug}.mdx`); // gets pathname
	const postContent = fs.readFileSync(fullPath, 'utf8'); // reads the file

	return postContent;
}

