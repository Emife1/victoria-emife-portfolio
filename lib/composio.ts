export async function sendEmail(payload: any) {
  // Will integrate with Composio Gmail tool
  return {
    status: "queued",
    payload,
  };
}