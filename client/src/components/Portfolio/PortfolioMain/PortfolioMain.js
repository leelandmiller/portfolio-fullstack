import React from 'react';
import Jumbotron from '../../Common/Jumbotron';
import ProjectList from '../ProjectList';

const PortfolioMain = props => {
    return(
        <div>
            <Jumbotron bg={'url(assets/images/work_bg_2.jpeg)'} page={'my work'} />
            <ProjectList />
        </div>
    );
}

export default PortfolioMain;
