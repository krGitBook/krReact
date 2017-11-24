import React from 'react';
import '../index.less';

export default class LittleItem extends React.Component {

	constructor(props) {
		super(props)
	}


	littleClick=()=>{
	   var dom=document.getElementById('little-detail');
	   dom.style.transition='all 4s ease';
	   if(dom.style.opacity=='1'){
	   	  dom.style.opacity='1';
	      dom.style.paddingLeft='50px';
	   }
	   
	}


	render() {

        let {label,children}=this.props;

		return (
				<div className='time-item-process'>
				  <div className='little-title-line'></div>
		          <div className='little-title' onClick={this.littleClick}>{label}</div>
		          <div className='little-detail' id='little-detail'>
		            {children}
		          </div>
				</div>
	   );
	 }
}
