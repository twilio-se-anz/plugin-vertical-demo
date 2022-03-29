export default {
    baseName: "FlexLight",
    colors: {
        lightTextColor: "#FFFFFF",
        darkTextColor: "#001489",
    },
    overrides: {
        MainHeader: {
            Container: {
                color: "#FFFFFF",
                background: "#F22F46",          
            },
            Button: {
                color: "#FFFFFF",
                background: "#F22F46", 
            }
        },
        SideNav: {
            Container: {
                background: "#001489",
            },
            Button: {
                background: "#001489",
                color: "#FFFFFF"
            },
            Icon: {
                color: "#FFFFFF"
            }
        },

        TaskCanvasHeader: {
            WrapupTaskButton: {
                background: "#F22F46",
                color: "#FFFFFF",
            },
            EndTaskButton: {
                background: "#001489",
                color: "#FFFFFF",
            }
        },
        TaskList: {
            Item: {
                Icon:{
                    background: "#F22F46",
                    color: "#FFFFFF",  
                }
            }
        }
    }
    
}