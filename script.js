const jobs = [
    { id: 1, companyName: "Tech Solutions Ltd", position: "Frontend Developer", location: "Dhaka", type: "Full Time", salary: "40,000 BDT", description: "Work on website UI development.", status: "all" },
    { id: 2, companyName: "Creative IT", position: "Backend Developer", location: "Sylhet", type: "Full Time", salary: "50,000 BDT", description: "Develop backend systems.", status: "all" },
    { id: 3, companyName: "Digital World", position: "Web Designer", location: "Chittagong", type: "Remote", salary: "30,000 BDT", description: "Design website layouts.", status: "all" },
    { id: 4, companyName: "NextGen Soft", position: "Junior Developer", location: "Dhaka", type: "Internship", salary: "15,000 BDT", description: "Assist senior developers.", status: "all" },
    { id: 5, companyName: "Future Tech", position: "QA Engineer", location: "Rajshahi", type: "Full Time", salary: "35,000 BDT", description: "Test web applications.", status: "all" },
    { id: 6, companyName: "Smart IT", position: "Support Engineer", location: "Khulna", type: "Full Time", salary: "28,000 BDT", description: "Provide technical support.", status: "all" },
    { id: 7, companyName: "Web House", position: "React Developer", location: "Dhaka", type: "Remote", salary: "55,000 BDT", description: "Build React applications.", status: "all" },
    { id: 8, companyName: "Cloud Tech", position: "DevOps Engineer", location: "Sylhet", type: "Full Time", salary: "60,000 BDT", description: "Manage cloud infrastructure.", status: "all" }
];

let currentTab = "all";

function updateDashboard() {
    let interviewCount = 0;
    let rejectedCount = 0;
    jobs.forEach(job => {
        if (job.status === "interview") interviewCount++;
        if (job.status === "rejected") rejectedCount++;
    });
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText = interviewCount;
    document.getElementById("rejectedCount").innerText = rejectedCount;}

    
function createJobCard(job) {
    const card = document.createElement("div");
    card.className = "bg-gray-100 shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition relative";

    if (job.status === "interview") {
        const badge = document.createElement("span");
        badge.className = "absolute top-2 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded";
        badge.innerText = "Interview";
        card.appendChild(badge);
    } else if (job.status === "rejected") {
        const badge = document.createElement("span");
        badge.className = "absolute top-2 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded";
        badge.innerText = "Rejected";
        card.appendChild(badge);}

    const companyEl = document.createElement("h3");
    companyEl.className = "text-lg py-2 font-bold mt-3";
    companyEl.innerText = job.companyName;
    card.appendChild(companyEl);

    const details = [
        { label: "Position", value: job.position },
        { label: "Location", value: job.location },
        { label: "Type", value: job.type },
        { label: "Salary", value: job.salary },
        { label: "Description", value: job.description }
    ];

    details.forEach(d => {
        const p = document.createElement("p");
        p.className = d.label === "Description" ? "mt-2 text-sm text-gray-600" : "";
        p.innerText = `${d.label}: ${d.value}`;
        card.appendChild(p);
    });

    const btnInterview = document.createElement("button");
    btnInterview.innerText = "Interview";
    btnInterview.className = "btn btn-success bg-green-500 text-white px-3 py-1 rounded mr-2 mt-3 hover:bg-green-600";
    btnInterview.onclick = () => markInterview(job.id);
    card.appendChild(btnInterview);

    const btnRejected = document.createElement("button");
    btnRejected.innerText = "Rejected";
    btnRejected.className = "btn btn-error bg-red-500 text-white px-3 py-1 rounded mr-2 mt-3 hover:bg-red-600";
    btnRejected.onclick = () => markRejected(job.id);
    card.appendChild(btnRejected);

    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.className = "btn btn-soft absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600";
    btnDelete.onclick = () => deleteJob(job.id);
    card.appendChild(btnDelete);

    return card;}

function displayJobs() {
    const container = document.getElementById("jobContainer");
    container.innerHTML = "";

    const filteredJobs = jobs.filter(job => currentTab === "all" || job.status === currentTab);

    if (filteredJobs.length === 0) {
        document.getElementById("noJobModal").classList.remove("hidden");
    } else {
        document.getElementById("noJobModal").classList.add("hidden");
        filteredJobs.forEach(job => container.appendChild(createJobCard(job)));
    }

    document.getElementById("sectionCount").innerText = filteredJobs.length + " Jobs";
    updateDashboard();}

function showTab(tabName) {
    currentTab = tabName;
    displayJobs();

    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.classList.remove("bg-blue-500", "bg-green-500", "bg-red-500", "text-white");
        btn.classList.add("bg-gray-300", "text-black");

        if ((tabName === "all" && btn.id === "tabAll") ||
            (tabName === "interview" && btn.id === "tabInterview") ||
            (tabName === "rejected" && btn.id === "tabRejected")) {
            btn.classList.remove("bg-gray-300", "text-black");
            if(tabName === "all") btn.classList.add("bg-blue-500","text-white");
            if(tabName === "interview") btn.classList.add("bg-green-500","text-white");
            if(tabName === "rejected") btn.classList.add("bg-red-500","text-white");
        }
    });
}

function markInterview(id) {
    const job = jobs.find(j => j.id === id);
    if (job) job.status = "interview";
    displayJobs();}

function markRejected(id) {
    const job = jobs.find(j => j.id === id);
    if (job) job.status = "rejected";
    displayJobs();}

function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) jobs.splice(index, 1);
    displayJobs();}

document.getElementById("closeModal").onclick = () => {
    document.getElementById("noJobModal").classList.add("hidden");};
window.onclick = (event) => {
    const modal = document.getElementById("noJobModal");
    if(event.target === modal) modal.classList.add("hidden");};

showTab("all");