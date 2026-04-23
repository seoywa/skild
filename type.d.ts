interface SkillRecord {
  id: string,
  title: string, //Write Code
  slug: string, //write-code, url friendly name
  description: string,
  category: string,
  tags: string[],
  installCommand: string,
  createdAt: string | null,
  authorClerkId: string | null,
  authorEmail: string | null,
}