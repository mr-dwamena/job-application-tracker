const form = document.querySelector("#application-form");
const companyInput = document.querySelector("#company");
const roleInput = document.querySelector("#role");
const statusInput = document.querySelector("#status");
const applicationCount = document.querySelector("#application-count");
const applicationsList = document.querySelector("#applications-list");

let applications = [];

function renderApplications() {
  applicationsList.replaceChildren();
  applicationCount.textContent = applications.length;

  if (applications.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No applications yet. Add your first one above.";
    applicationsList.appendChild(emptyMessage);
    return;
  }

  for (const application of applications) {
    const card = document.createElement("article");
    const companyHeading = document.createElement("h3");
    const roleText = document.createElement("p");
    const statusText = document.createElement("p");

    companyHeading.textContent = application.company;
    roleText.textContent = application.role;
    statusText.textContent = `Status: ${application.status}`;

    card.appendChild(companyHeading);
    card.appendChild(roleText);
    card.appendChild(statusText);
    applicationsList.appendChild(card);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const company = companyInput.value.trim();
  const role = roleInput.value.trim();

  if (!company || !role) {
    return;
  }

  const newApplication = {
    company,
    role,
    status: statusInput.value,
  };

  applications = [newApplication, ...applications];
  renderApplications();

  companyInput.value = "";
  roleInput.value = "";
  statusInput.value = "Applied";
  companyInput.focus();
});

renderApplications();