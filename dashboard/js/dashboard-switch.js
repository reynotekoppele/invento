const breadcrumbItems = document.querySelectorAll(".breadcrumb-item");
const dashboardContent = document.querySelectorAll (".dashboard-content");

breadcrumbItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        dashboardContent.forEach(item => item.classList.remove("dashboard-content-visible"));
        dashboardContent[index].classList.add("dashboard-content-visible");
    });
});

