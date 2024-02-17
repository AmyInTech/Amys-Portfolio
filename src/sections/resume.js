function Resume() {
  const openResume = () => {
    window.open("/images/Amy%20Dinh%20Resume.pdf", "_blank");
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/images/Amy%20Dinh%20Resume.pdf";
    link.download = "Amy Dinh Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume-section" class="resume-section">
      <div class="resume-container">
        <div class="section-heading">Resume</div>
        <div class="resume-content">
          <div class="resume-cards">
            <div class="resume-card resume-card-1">
              <div class="resume-card-popup">
                <button onClick={openResume}>Open Resume</button>

                <button onClick={downloadResume}>Download</button>
              </div>
            </div>
            <div class="resume-card resume-card-2">
              <div class="resume-card-popup">
                <button onClick={openResume}>Open Resume</button>

                <button onClick={downloadResume}>Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
