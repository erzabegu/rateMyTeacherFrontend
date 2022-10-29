import {Container} from 'react-bootstrap'
import {StatisticsType} from '../../../types'
import {Header} from '../../molecules'
import {AboutUs, Footer, SearchBox, StatisticsWrapper} from '../../organisms'
import {debounce} from "lodash";
import ReactSearchBox from "react-search-box";
import './style.scss'

interface Props {
    statistics: Array<StatisticsType>;
    searchTerm?: any;
    setSearchTerm?: any;
    professorsToRender?: any;
}

const LandingTemplate = ({statistics, searchTerm, setSearchTerm, professorsToRender}: Props) => {
    const debouncedSearch = debounce((criteria) => {
        setSearchTerm(criteria);
    }, 300);

    async function handleChange(e: any) {
        debouncedSearch(e.target.value);
    }

    return (<>
            <Header initialState={true}/>
            <div className="landingTemplateContainer">
                <SearchBox onChange={(e) => handleChange(e)} professorsToRender={professorsToRender}/>
            </div>
            <Container className='mt-5'>
                <AboutUs/>
                <StatisticsWrapper statistics={statistics}></StatisticsWrapper>
            </Container>
            <Container fluid style={{backgroundColor: '#234262', color: 'white'}}>
                <Footer/>
            </Container>
        </>
    )
}

export default LandingTemplate