import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link-item">
        <li>
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    </li>
  )
}

export default TeamCard
