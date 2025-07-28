function Footer(props) {
    return (
        <footer className="footer container mx-auto inline-flex justify-between py-5">
            <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
            <ul className="social-media-links inline-flex gap-3">
                {props.userDetails.socialMedia.map((platform) => (
                    <li key={platform.id}>
                        <a href={platform.url} target={platform.target} rel="noopener noreferrer">
                            {platform.name}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
export default Footer;