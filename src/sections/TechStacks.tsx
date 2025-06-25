const badgeUrls = [
  { name: "Python", url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "HTML", url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
  { name: "CSS", url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
  {
    name: "JavaScript",
    url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  },
  {
    name: "TypeScript",
    url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    name: "Node.js",
    url: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  },
  { name: "npm", url: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" },
  {
    name: "TailwindCSS",
    url: "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
  },
  { name: "React", url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
  {
    name: "React Native",
    url: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  { name: "Vite", url: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" },
  { name: "Expo", url: "https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" },
  { name: "Django", url: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
  {
    name: "Firebase",
    url: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
  },
  {
    name: "PostgreSQL",
    url: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
  },
  { name: "SQLite", url: "https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" },
  { name: "MySQL", url: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
  { name: "Git", url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
  { name: "GitHub", url: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
  {
    name: "Postman",
    url: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
  },
  { name: "Axios", url: "https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" },
  { name: "Figma", url: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" },
  { name: "Canva", url: "https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white" },
  {
    name: "AppSheet",
    url: "https://img.shields.io/badge/AppSheets-0052CC?style=for-the-badge&logo=appsheet&logoColor=white",
  },
  {
    name: "Google Docs",
    url: "https://img.shields.io/badge/Google%20Docs-4285F4?style=for-the-badge&logo=google-docs&logoColor=white",
  },
  {
    name: "Google Sheets",
    url: "https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white",
  },
  { name: "Trello", url: "https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" },
  { name: "Miro", url: "https://img.shields.io/badge/Miro-FF2D20?style=for-the-badge&logo=miro&logoColor=white" },
  {
    name: "Jupyter",
    url: "https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white",
  },
  {
    name: "Markdown",
    url: "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
  },
  { name: "Jest", url: "https://img.shields.io/badge/Jest-99425b?style=for-the-badge&logo=jest&logoColor=white" },
];

export default function TechStacks() {
  return (
    <section className="flex flex-col items-center justify-center mx-5">
      <div className="flex flex-col items-center my-5 py-5 text-white">
        <p className="text-3xl mx-3 txtcolor font-bold">TECH STACKS</p>
        <div className="my-5 mx-3 text-xs">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {badgeUrls.map(({ name, url }, index) => (
              <img key={index} src={url} alt={`${name} badge`} className="h-7 transition-transform hover:scale-105" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
