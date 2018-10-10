import React, { Component } from 'react'
// import {Container, Row, Col, Media} from 'react-bootstrap'
import SideBar from 'react-side-bar'


export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'SideBarExample';
    this.state = {
      barOpened: false,
      duration: 150,
      fx: 'cubic-bezier(0, 1, 0.85, 1)',
      mode: 'over',
      side: 'left',
      size: 256,
      tolerance: 70,
      topBarIncluded: false,
      touch: true,
      touchSize: 80
    };
  }
  toggleBar() {
    this.setState({ barOpened: !this.state.barOpened });
  }

  onOpen() {
    this.setState({ barOpened: true });
  }

  onClose() {
    this.setState({ barOpened: false });
  }


  render () {
    const { barOpened, duration, fx, mode, side, size, tolerance,
      topBarIncluded, touch, touchSize } = this.state;
    const { BEHIND, OVER, PUSH } = SideBar.MODES;
    const { LEFT, RIGHT } = SideBar.SIDES;
    const navIconClassName = [ 'nav-icon' ];

    if (barOpened) {
      navIconClassName.push('open');
    }
    const bar = (<div className='side'>Amazing SideBars</div>);
    const topBar = (<div className='topBar'>
      <div className='left'>
        <div
          className={navIconClassName.join(' ')}
          onClick={this.toggleBar.bind(this)}>
          <span/><span/><span/><span/>
        </div>
      </div>
      <div className='center'>SideBar</div>
      <div className='right'></div>
    </div>);

    const sideBarProps = {
      bar: bar,
      duration: duration,
      fx: fx,
      mode: mode,
      opened: barOpened,
      onOpen: this.onOpen.bind(this),
      onClose: this.onClose.bind(this),
      side: side,
      size: size,
      tolerance: tolerance,
      touch: touch,
      touchSize: touchSize,
      veilStyle: {
        opacity: 0.4
      }
    };

    if (topBarIncluded) {
      sideBarProps.topBar = topBar;
    }

  return (
    <SideBar {...sideBarProps}>
      { !topBarIncluded && topBar }
      <div className='main'>
        <section className='duration-option'>
          <div className='title'>Duration</div>
          <div className='explain'>
            Set the duration of the opening and closing in milisecons.
            (default: 150ms)
          </div>
          <div className='option-wrapper'>
            <input type='number'
              onChange={this.handleChangeDuration.bind(this)}
              value={duration} />
            <span>ms</span>
          </div>
        </section>
        <section className='fx-option'>
          <div className='title'>FX</div>
          <div className='explain'>
            This option allows set the effect to open the sidebar.
          </div>
          <div className='option-wrapper'>
            <input
              type='text'
              onChange={this.handleChangeFx.bind(this)}
              value={fx} />
          </div>
        </section>
        <section className='openingMode-option'>
          <div className='title'>Mode</div>
          <div className='explain'>
            Set opening mode. <b>BEHIND</b>, the sidebar keep behind the
            content of the app. <b>OVER</b>, the sidebar opens above the
            content. <b>PUSH</b>, the sidebar moves the content of the app.
          </div>
          <div className='option-wrapper'>
            <select value={mode} onChange={this.handleChangeMode.bind(this)}>
              <option value={BEHIND}>{BEHIND}</option>
              <option value={OVER}>{OVER}</option>
              <option value={PUSH}>{PUSH}</option>
            </select>
          </div>
        </section>
        <section className='opened-option'>
          <div className='title'>Opened</div>
          <div className='explain'>
            Set this option to open or close sidebar.
          </div>
          <div className='option-wrapper'>
            <input
              id='opened-option'
              onChange={this.toggleBar.bind(this)}
              type='checkbox'
              checked={barOpened} />
            <label htmlFor='opened-option'>Opened</label>
          </div>
        </section>
        <section className='openingSide-option'>
          <div className='title'>Side</div>
          <div className='explain'>
            Set the side where to place the sidebar, <b>LEFT</b> or
            <b>RIGHT</b>.
          </div>
          <div className='option-wrapper'>
            <select value={side} onChange={this.handleChangeSide.bind(this)}>
              <option value={LEFT}>{LEFT}</option>
              <option value={RIGHT}>{RIGHT}</option>
            </select>
          </div>
        </section>
        <section className='size-option'>
          <div className='title'>Size</div>
          <div className='explain'>
            Set the width of the sidebar in pixels. (default: 256px)
          </div>
          <div className='option-wrapper'>
            <input type='number'
              onChange={this.handleChangeSize.bind(this)}
              value={size} />
            <span>px</span>
          </div>
        </section>
        <section className='tolerance-option'>
          <div className='title'>Tolerance</div>
          <div className='explain'>
            Set the tolerance of sidebar to decide if it has to open or close
            when you slide de sidebar (default: 70px).
          </div>
          <div className='option-wrapper'>
            <input type='number'
              onChange={this.handleChangeTolerance.bind(this)}
              value={tolerance} />
            <span>px</span>
          </div>
        </section>
        <section className='topBar-option'>
          <div className='title'>TopBar</div>
          <div className='explain'>
            This option allows integrate the topBar of the app as part of the
            SideBar component to open the sidebar ignoring the topBar.
          </div>
          <div className='option-wrapper'>
            <input
              id='topBar-option'
              onChange={this.handleChangeTopBar.bind(this)}
              type='checkbox'
              checked={topBarIncluded} />
            <label htmlFor='topBar-option'>Include TopBar</label>
          </div>
        </section>
        <section className='touch-option'>
          <div className='title'>Touch</div>
          <div className='explain'>
            Enable or disable touch option.
          </div>
          <div className='option-wrapper'>
            <input
              id='touch-option'
              onChange={this.handleChangeTouch.bind(this)}
              type='checkbox'
              checked={touch} />
            <label htmlFor='touch-option'>Enable touch</label>
          </div>
        </section>
        { touch &&
          <section className='touchSize-option'>
            <div className='title'>TouchSize</div>
            <div className='explain'>
              If the touch option is enabled, this option allows set the size
              of the touchable zone, depends of the side selected.
            </div>
            <div className='option-wrapper'>
              <input type='number'
                onChange={this.handleChangeTouchSize.bind(this)}
                value={touchSize} />
              <span>px</span>
            </div>
          </section>
        }
      </div>
    </SideBar>
    )
  }
}

