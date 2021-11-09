import React, {Component} from 'react';

class Profiles extends Component {
	render(){
    	return(
        	<li>
          			{this.props.profiles.map(profile => {
          				const userName = this.props.users[profile.userID].name
        				const favoriteMovie = this.props.movies[profile.favoriteMovieID].name
        				return (
                        	<p><strong>{userName}</strong> likes <strong>{favoriteMovie}</strong></p>
                        )
          			})}
          	</li>
        );
    };
}

export default Profiles;