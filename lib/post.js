import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { Noto_Serif_Tangut } from "@next/font/google"

const postsDirectory = path.join(process.cwd(), "posts")

//mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)

    //idとデータを返す
    return {
      id,
      ...matterResult.data,
    }
  })
  return allPostsData;
}

// getStaticPathsででreturnで使うpathを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  })
}
