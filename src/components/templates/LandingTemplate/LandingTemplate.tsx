import {Container} from 'react-bootstrap'
import {StatisticsType} from '../../../types'
import {Header} from '../../molecules'
import {AboutUs, Footer, SearchBox, StatisticsWrapper} from '../../organisms'
import {debounce} from "lodash";
import './style.scss'

interface Props {
    statistics: any;
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
            <div className="landingTemplateContainer">
                <Header initialState={true} textColor={'white'}/>
                <SearchBox onChange={(e) => handleChange(e)} professorsToRender={professorsToRender}/>
            </div>
            <Container className='mt-5'>
                <AboutUs/>
                <StatisticsWrapper statistics={statistics}></StatisticsWrapper>
            </Container>
            <div style={{backgroundColor: '#151515', color: 'white' ,display: 'flex', flexDirection: 'column', justifyContent: 'center'}} className={'pt-5 pb-5'}>
                <Footer/>
            </div>
        </>
    )
}

export default LandingTemplate