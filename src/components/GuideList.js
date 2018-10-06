import React, { Component } from 'react';
import { connect } from 'react-redux';
import { demoteGuide, removeGuide } from '../actions/guideActions'

class GuideList extends Component {
	render() {
		return (
			<div>
				<h2>Guides</h2>
				<ol>
					{
						this.props.guides.map((guide)=>(
							<li style={{display: 'flex'}} key={'guide-'+guide.id}>
								<div>{guide.id}</div>
								<div>{guide.name}</div>
								<button onClick={()=>this.props.removeGuide(guide.id)}>Remove</button>
								<button onClick={()=>this.props.demoteGuide(guide)}>Demote</button>
							</li>
						))
					}
				</ol>
			</div>
		)
	}
}

const mapStateToProps = (store)=>{
	return {
		guides: store.guides
	}
}

export default connect(mapStateToProps, {demoteGuide, removeGuide})(GuideList);
