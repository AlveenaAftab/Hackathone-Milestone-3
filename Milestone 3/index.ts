// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Form submission handler
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Collect input values
  const inputValues = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    phone: (document.getElementById('phone') as HTMLInputElement).value,
    linkedin: (document.getElementById('linkedin') as HTMLInputElement).value,
    education: (document.getElementById('education') as HTMLTextAreaElement).value,
    experience: (document.getElementById('experience') as HTMLTextAreaElement).value,
    skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
    certifications: (document.getElementById('certifications') as HTMLTextAreaElement).value,
    references: (document.getElementById('references') as HTMLTextAreaElement).value,
  };

  // Generate resume HTML
  const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${inputValues.name}</p>
    <p><b>Email:</b>${inputValues.email}</p>
    <p><b>Phone:</b>${inputValues.phone}</p>
    <p><b>LinkedIn:</b><a href="${inputValues.linkedin}">${inputValues.linkedin}</a></p>
    <h3>Education</h3>
    <p>${inputValues.education}</p>
    <h3>Experience</h3>
    <p>${inputValues.experience}</p>
    <h3>Skills</h3>
    <p>${inputValues.skills}</p>
    <h3>Certifications</h3>
    <p>${inputValues.certifications}</p>
    <h3>References</h3>
    <p>${inputValues.references}</p>
  `;

  // Display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error('The resume display element is missing.');
  }
});