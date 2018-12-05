import React, { Component } from 'react';
import { View, WebView } from 'react-native';
export default class extends Component {
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(WebView, { style: { flex: 1 }, source: { uri: 'https://www.amap.com' } })));
    }
}
//# sourceMappingURL=GdMapContainer.js.map