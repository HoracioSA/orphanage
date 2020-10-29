import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetail from './pages/OrphanageDetail';
import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanages/OrphanageData';
import Header from './components/Header';

const {Navigator, Screen} = createStackNavigator();
export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#f2f2f5'}}}>
                <Screen 
                name="OrphanageMap" 
                component={OrphanagesMap}
                />
                <Screen 
                name="OrphanageDetail"
                component={OrphanageDetail}
                options={{
                            headerShown:true,
                            header:()=><Header showCancel={false} title="Orphanage"/>
                            }
                        }
                />
                <Screen 
                name="SelectMapPosition"
                component={SelectMapPosition}
                options={{
                    headerShown:true,
                    header:()=><Header title="Selecione no mapa"/>
                    }
                }
                // options={{headerShown:true}}
                />
                <Screen 
                name="OrphanageData"
                component={OrphanageData}
                options={{
                    headerShown:true,
                    header:()=><Header title="Informe os dados"/>
                    }
                }
                // options={{headerShown:true}}
                />
            </Navigator>
        </NavigationContainer>
    )
}