import React from 'react';
import { connect } from 'react-redux';
import { Grid, Label } from 'semantic-ui-react';
import { getUserDetailSaga } from '../../actions/gitHubUsers';

class GitHubUserDetails extends React.Component{
    constructor(){
        super()

    }

    componentDidMount(){
        this.props.getUserDetailSaga(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps){
    }

    render(){
        
        console.log(this.props.details)
        return(
           <div>
                <p>
                    {this.props.details && this.props.details.employee_name}
                </p>
               
                <p>
                     {this.props.details && this.props.details.employee_salary}
                </p>
            </div>    
        )
    }
}

const mapStateToProps = state => ({
    details: state.gitHubUserReducer.details
  });
  
  const mapDispatchToProps = dispatch => ({
    getUserDetailSaga: (data) => dispatch(getUserDetailSaga(data))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(GitHubUserDetails);

