export default function SectionHeading({mainHeading,viewLink}) {
    return (
        <div className="top">
            <div className="text">
                <h6 style={{ color: "#303030" }}>{mainHeading}</h6>
                <a href="#">
                    <h5 className="h5Medium">{viewLink}</h5>
                </a>
            </div>
        </div>
    )
}