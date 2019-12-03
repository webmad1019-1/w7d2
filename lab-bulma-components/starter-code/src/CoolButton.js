import React, { Component } from "react";

export default class CoolButton extends Component {
  render() {
    let bulmaProps = {
      isActive: "is-active",
      isBlack: "is-black",
      isCentered: "is-centered",
      isDanger: "is-danger",
      isDark: "is-dark",
      isFocused: "is-focused",
      isGrouped: "is-grouped",
      isHovered: "is-hovered",
      isInfo: "is-info",
      isInverted: "is-inverted",
      isLarge: "is-large",
      isLight: "is-light",
      isLink: "is-link",
      isLoading: "is-loading",
      isMedium: "is-medium",
      isOutlined: "is-outlined",
      isPrimary: "is-primary",
      isRight: "is-right",
      isRounded: "is-rounded",
      isSelected: "is-selected",
      isSmall: "is-small",
      isStatic: "is-static",
      isSuccess: "is-success",
      isText: "is-text",
      isWarning: "is-warning",
      isWhite: "is-white"
    };

    let finalClass = this.props.className.split(" ");
    finalClass.push("button");

    for (let oneBulmaProp in this.props) {
        //isDanger => bulmaProps[isDanger] ====== is-danger
        if (bulmaProps[oneBulmaProp] !== undefined) {
            finalClass.push(bulmaProps[oneBulmaProp])
        }
    }

    finalClass = finalClass.join(" ");
    
    return <button className={finalClass}>{this.props.children}</button>;
  }
}
