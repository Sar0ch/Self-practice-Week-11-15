//ฝึกทำด้วย Integrated Project รอบนี้ทำส่วนรับหน้าที่ทำในส่วนของ Backend โค้ดที่ได้ฝึกของ Frontend เลยมีน้อย
// Load Study Plans
async function loadStudyPlans(selectElement) {
  try {
    const response = await fetch(`${BASE_URL}/study-plans`);

    const plans = await response.json();

    selectElement.innerHTML = '<option value="">-- Select Major --</option>';

    plans.forEach(plan => {
      const option = document.createElement("option");
      option.value = plan.id;
      option.textContent = `${plan.planCode} - ${plan.nameEng}`;
      option.className = "ecors-plan-row"
      selectElement.appendChild(option);
    });

    console.log("✅ Study plans loaded");

  } catch (error) {
    console.error("❌ Error loading study plans:", error);
  }

}