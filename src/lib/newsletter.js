export async function subscribeToNewsletter({ email }) {
  const list = JSON.parse(localStorage.getItem("trio-newsletter") || "[]");
  if (!list.includes(email)) list.push(email);
  localStorage.setItem("trio-newsletter", JSON.stringify(list));
  return { ok: true };
}
