from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Shaurya-Pathak-Resume.pdf"


def paragraph(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def add_role(story, company, location, title, dates, bullets, styles):
    story.append(
        paragraph(
            f"<b>{company}</b><font color='#555555'> · {location}</font>",
            styles["role_head"],
        )
    )
    story.append(
        paragraph(
            f"{title}<font color='#666666'> · {dates}</font>",
            styles["role_title"],
        )
    )
    for bullet in bullets:
        story.append(paragraph(f"• {bullet}", styles["bullet"]))
    story.append(Spacer(1, 5))


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.58 * inch,
        leftMargin=0.58 * inch,
        topMargin=0.44 * inch,
        bottomMargin=0.42 * inch,
        title="Shaurya Pathak Resume",
        author="Shaurya Pathak",
    )

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=20,
            leading=23,
            alignment=TA_CENTER,
            spaceAfter=3,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=10,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#555555"),
            spaceAfter=9,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=13,
            spaceBefore=5,
            spaceAfter=4,
            borderColor=colors.HexColor("#B9B9B9"),
            borderWidth=0,
            borderPadding=0,
            borderBottomWidth=0.5,
        ),
        "role_head": ParagraphStyle(
            "RoleHead",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=11,
            spaceAfter=1,
        ),
        "role_title": ParagraphStyle(
            "RoleTitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.7,
            leading=10.5,
            textColor=colors.HexColor("#333333"),
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=10.2,
            leftIndent=9,
            firstLineIndent=-7,
            spaceAfter=1.6,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=10.5,
            spaceAfter=2,
        ),
    }

    story = [
        paragraph("Shaurya Pathak", styles["name"]),
        paragraph(
            "Santa Clara, CA · shauryapathak24@gmail.com · 562-330-8614 · github.com/shaurya-pathak",
            styles["contact"],
        ),
        paragraph("Experience", styles["section"]),
    ]

    add_role(
        story,
        "NVIDIA",
        "Santa Clara, CA",
        "Software Development Engineer in Test",
        "Mar 2025 - Present",
        [
            "Architected automated debugging orchestration across hundreds of release workflows using AI-driven analysis, Celery, RabbitMQ, and Python, reducing false-positive reports by 40%.",
            "Built multi-platform validation infrastructure for GPU driver stacks, benchmarking latency, throughput, and floating-point precision across varied workloads.",
            "Engineered CI/CD regression pipelines that reduced validation runtime by 60% while expanding cross-architecture coverage.",
        ],
        styles,
    )
    add_role(
        story,
        "NVIDIA",
        "Santa Clara, CA",
        "Data Engineer - NeMo",
        "Aug 2024 - Mar 2025",
        [
            "Designed ETL pipelines and analytical dashboards supporting LLM training and evaluation across research teams.",
            "Developed 15+ statistical measures for annotation bias, linguistic diversity, and dataset consistency.",
            "Built automated validation workflows that made model evaluation more reproducible.",
        ],
        styles,
    )
    add_role(
        story,
        "NASA Jet Propulsion Laboratory / City of Los Angeles",
        "Remote",
        "Student Researcher",
        "Sep 2021 - Dec 2024",
        [
            "Built convolutional LSTM models to forecast PM2.5 from satellite imagery and sensor data, achieving RMSE of 1.6 micrograms per cubic meter without ground stations.",
            "Engineered an AWS inference pipeline using Glue, Lambda, and S3 to generate hourly pollution forecasts.",
            "Integrated static and real-time traffic data into simulation frameworks for congestion and urban-planning analysis.",
        ],
        styles,
    )
    add_role(
        story,
        "AllCare Therapies",
        "Cerritos, CA",
        "Software Engineer Intern",
        "Jun 2024 - Aug 2024",
        [
            "Developed a serverless ML classification pipeline with AWS Lambda and Step Functions, automating 90% of document processing.",
            "Improved data-ingestion and model-inference throughput by 3x through pipeline refinements.",
        ],
        styles,
    )

    story.extend(
        [
            paragraph("Education", styles["section"]),
            paragraph(
                "<b>University of California, Riverside</b> · B.S. Computer Science with Business Applications · Dec 2024",
                styles["body"],
            ),
            paragraph(
                "GPA 3.82 (major 3.88) · Chancellor’s and Dean’s List · Undergraduate research assistant",
                styles["body"],
            ),
            paragraph("Selected Projects", styles["section"]),
            paragraph(
                "<b>Get Me to a Human</b> · Operator-supervised outbound voice agent that navigates IVRs, uses DTMF, and grounds support outcomes in the other party’s words.",
                styles["body"],
            ),
            paragraph(
                "<b>Kaivra</b> · Declarative animation engine that renders structured JSON or YAML to stills, video, and web previews, with a local MCP authoring workflow.",
                styles["body"],
            ),
            paragraph(
                "<b>Glyde</b> · Local-first generation and hosting layer for native Slidev decks with reusable interactive components and visual checks.",
                styles["body"],
            ),
            paragraph("Technical Skills", styles["section"]),
            paragraph(
                "Python, SQL, Bash, C++ · Pandas, NumPy, SciPy, scikit-learn, PyTorch, TensorFlow, Celery, RabbitMQ · AWS, Linux, Docker, Git, Ansible, CI/CD, CUDA",
                styles["body"],
            ),
        ]
    )

    doc.build(story)


if __name__ == "__main__":
    build_resume()
