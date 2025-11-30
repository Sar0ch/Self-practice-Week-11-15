//ฝึกทำด้วย Integrated Project รอบนี้ทำส่วนรับหน้าที่ทำในส่วนของ Backend โค้ดที่ได้ฝึกของ Frontend เลยมีน้อย
// Load Declared Plan
async function loadDeclaredPlan(statusMsg, declareBtn) {

  const studentId = keycloakInstance.tokenParsed?.preferred_username;

  try {
    const response = await fetch(`${BASE_URL}/students/${studentId}/declared-plan`);

    if (response.status === 404) {
      statusMsg.textContent = "Declaration Status: Not Declared";
      declareBtn.style.display = "inline-block";
      declareBtn.disabled = true;
      return;
    }
    const data = await response.json();
    declareBtn.style.display = "none";

    const updatedAt = new Date(data.updatedAt);
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatted = updatedAt.toLocaleString("en-GB", { timeZone: userTimeZone });

    statusMsg.textContent = `Declaration Status: Declared ${data.planCode} - ${data.planNameEng} on ${formatted} (${userTimeZone})`;

  } catch (error) {
    console.error(" Error loading declared plan:", error);
  }
}