const BASE_ID = process.env.AIRTABLE_BASE_ID
const TOKEN = process.env.AIRTABLE_TOKEN
const TABLE_ID = 'tblj7QuNiyVCNVpEt'

async function fetchArticles() {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  })
  if (!res.ok) throw new Error(`Airtable error: ${res.status}`)
  const data = await res.json()
  return data.records.map(r => ({
    id: r.id,
    title: r.fields['Название статьи'] || '',
    date: r.fields['Data'] || '',
    type: r.fields['Вид'] || '',
    readTime: r.fields['Время чтения'] || '',
    category: r.fields['Категории тем'] || '',
    subcategory: r.fields['Подкатегории'] || ''
  }))
}

export { fetchArticles }
