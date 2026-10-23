import './BioPage.css'

const BioPage = () => {
    return ( 
        <div>
            <p className="bio-info">
                Leonel Zorzoli is a computer science student and Jr. Web Developer. A creative, enterprising and productive 
                person who never stops learning. He is currently working on a project called FindT which seeks to improve 
                collaboration and teamwork and at the same time help new students improve their understanding of how development teams work.
            </p>

            <p className="bio-interest">Interests</p>
            <ul className="interests">
                <li>Chess</li>
                <li>Computer science</li>
                <li>Culture</li>
                <li>Economy</li>
                <li>Languages</li>
                <li>Sociology</li>
                <li>Sports</li>
            </ul>
        </div>
    )
}

export default BioPage