import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { s, ScaledSheet } from 'react-native-size-matters';
import MarkContainer from '../component/MarkContainer';
import CardMenu from '../component/CardMenu';
import Button_Account from '../component/Button_account';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scaleWidth = SCREEN_WIDTH / 428; // 375 là chiều rộng thiết kế gốc
const scaleHeight = SCREEN_HEIGHT / 926; // 812 là chiều cao thiết kế gốc

//Mark over all
const MarkOverAll = () => {

    return (
        <View style={styles.markContainer}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <MarkContainer iconSource={require('../../../assets/icons/icon_headphone.png')} text={'0/9.0'} />

                    <MarkContainer iconSource={require('../../../assets/icons/icon_read.png')} text={'0/9.0'} />
                    <MarkContainer iconSource={require('../../../assets/icons/icon_write.png')} text={'0/9.0'} />
                    <MarkContainer iconSource={require('../../../assets/icons/icon_speak.png')} text={'0/9.0'} />

                </View>

                <TouchableOpacity style={styles.buttonMark}>
                    <Text>Xem chi tiết</Text>
                </TouchableOpacity>

            </View>

            <View
                style={{
                    flexDirection: 'column',

                    borderColor: '#FFFFFF',
                    borderWidth: 1,
                    alignItems: 'center'


                }}

            >
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'Roboto-Bold',
                        marginBottom: 10
                    }}
                >Điểm Over All</Text>

                <View style={styles.progressContainer}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Roboto-Bold',
                            marginBottom: 10,
                            textAlign: 'center',
                            alignSelf: 'center'
                        }}
                    >00</Text>

                </View>
            </View>

        </View>

    );
}

const MarkGoal = () => {
    return (
        <View style={styles.markContainer}>
            <View
                style={{
                    width: '70%'
                }}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'Roboto-Bold',

                }}>
                    Mục tiêu của bạn
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',


                }}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Roboto-Bold',
                    }}>
                        IELTS
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Roboto',
                    }}>
                        31/12/2023
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'


                }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Roboto',
                        marginRight: 5
                    }}>
                        Còn lại:
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Roboto',
                        color: '#F5AC3D'
                    }}>
                        0 ngày
                    </Text>
                </View>

                <TouchableOpacity style={styles.buttonMark}>
                    <Text>Sửa mục tiêu</Text>
                </TouchableOpacity>

            </View>

            <View
                style={{
                    flexDirection: 'column',

                    borderColor: '#FFFFFF',
                    borderWidth: 1,
                    alignItems: 'center'


                }}

            >
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'Roboto-Bold',
                        marginBottom: 10
                    }}
                >Điểm mục tiêu</Text>

                <View style={styles.progressContainer}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Roboto-Bold',
                            marginBottom: 10,
                            textAlign: 'center',
                            alignSelf: 'center'
                        }}
                    >7.0</Text>

                </View>
            </View>

        </View>

    );
}

const AccountScreen = ({ route }) => {

    const navigation = useNavigation();
    const { item, routeName } = route.params; // Lấy thông tin item và tên route

    return (
        <ScrollView style={styles.container}>
            {/* Breadcrumb */}
            <View style={styles.breadcrumb}>
                <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                    <MaterialCommunityIcons
                        name="home"
                        size={16}
                        color="#034567"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                    <Text style={styles.breadcrumbText}>{' ' + routeName}</Text>
                </TouchableOpacity>

                <MaterialCommunityIcons
                    name="chevron-right"
                    size={16}
                    color="#034567"
                    style={styles.icon}
                />
                <Text style={styles.breadcrumbText}> {item.title}</Text>
            </View>

            {/*Banner Image */}
            <View style={styles.bannerContainer}>
                <Image
                    source={require('../../../assets/images/banner_image.png')}
                    style={styles.banner}
                />
                <TouchableOpacity style={styles.camera_button}>
                    <Image
                        source={require('../../../assets/icons/icon_camera.png')}
                        style={styles.icon_camera}
                    />
                </TouchableOpacity>

            </View>

            {/*avatar and in4 */}

            <View style={styles.profileContainer}>
                <View style={styles.avatar_container}>
                    <Image
                        source={require('../../../assets/images/avatar.png')}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.camera_button_avatar}>
                        <Image
                            source={require('../../../assets/icons/icon_camera.png')}
                            style={styles.icon_camera_avatar}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.nameContainer}>
                    <Text style={styles.fullName}>Nguyễn Văn A</Text>
                    <View style={styles.role_container}>
                        <Text style={styles.role}>Hội viên</Text>
                    </View>

                    <TouchableOpacity style={styles.camera_button_avatar}>
                        <Image
                            source={require('../../../assets/icons/icon_edit_profile.png')}
                            style={styles.icon_edit}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/*divider */}

            <View style={styles.divider}>

            </View>

            {/*Mark and goal */}

            <MarkOverAll />

            {/*Mark and goal */}

            <MarkGoal />

            <View style={styles.divider}>

            </View>

            <CardMenu icon={require('../../../assets/icons/icon_user.png')}
                text={'Thông tin cá nhân'}
            />

            <CardMenu icon={require('../../../assets/icons/icon_chart.png')}
                text={'Báo cáo'}
            />

            <CardMenu icon={require('../../../assets/icons/icon_daskboard.png')}
                text={'Phân tích'}
            />

            <CardMenu icon={require('../../../assets/icons/icon_pen.png')}
                text={'Bài đã thi'}
            />

            <CardMenu icon={require('../../../assets/icons/icon_book.png')}
                text={'Đề thi đã lưu'}
            />
            <CardMenu icon={require('../../../assets/icons/icon_file.png')}
                text={'Tài liệu đã lưu'}
            />
            <CardMenu icon={require('../../../assets/icons/icon_eLearning.png')}
                text={'Gói đã mua'}
            />
            <CardMenu icon={require('../../../assets/icons/icon_text.png')}
                text={'Từ vựng'}
            />
            <CardMenu icon={require('../../../assets/icons/icon_term.png')}
                text={'Điểm danh'}
            />
            <CardMenu icon={require('../../../assets/icons/icon_languague.png')}
                text={'Ngôn ngữ'}
            />

            <CardMenu icon={require('../../../assets/icons/icon_infor.png')}
                text={'Thông tin phần mềm'}
            />
            <CardMenu icon={require('../../../assets/icons/icon_lock.png')}
                text={'Đổi mật khẩu'}
            />

            <Button_Account text={'Đăng xuất'}/>







        </ScrollView>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },

    markContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#034567',
        borderWidth: 1,
        backgroundColor: '#EDF9FF',
        marginTop: 15,
        borderRadius: 16,
        padding: 15,
        width: '90%', // Giới hạn chiều rộng tối đa
        alignSelf: 'center', // Căn giữa View trong View cha (tùy chọn)
    },

    iconMark: {
        width: 38 * scaleWidth,
        height: 38,

    },
    textMark: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular'
    },
    buttonMark: {
        width: 114 * scaleWidth,
        height: 24 * scaleWidth,
        borderColor: '#034567',
        borderWidth: 0.5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10

    },
    progressContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#A5DFFD',


    },
    breadcrumb: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    breadcrumbText: {
        fontSize: 14,
        color: '#555555',
    },
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    bannerContainer: {
        position: 'relative', // Để có thể định vị button camera bên trong
        width: '100%',
        height: 120,
    },
    banner: {
        width: '100%',
        height: '100%',
    },
    icon_camera: {
        width: 32,
        height: 32,
        borderColor: '#FFFFFF',
    },
    camera_button: {
        position: 'absolute', // Định vị tuyệt đối
        bottom: 5, // Cách bottom 10px
        right: 5, // Cách right 10px

        padding: 8, // Thêm padding để dễ nhấn
        borderRadius: 32, // Bo tròn button



    },
    avatar_container: {
        position: 'relative',
        width: 120,
        height: 120,
        marginTop: -50, // Để đẩy avatar lên trên che một phần banner
        marginLeft: 16,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 120,
        borderColor: '#FFFFFF',
        borderWidth: 2
    },
    icon_camera_avatar: {
        width: 32,
        height: 32,
    },
    camera_button_avatar: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 32,
        borderColor: '#FFFFFF',

        // Đổ bóng cho Android
        elevation: 5,

        // Đổ bóng cho iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -45,
        paddingLeft: 16,
        paddingBottom: 10,        // Thêm padding dưới

    },
    avatar_container: {
        position: 'relative',
        width: 120,
        height: 120,
    },

    fullName: {
        fontSize: 18,

        color: '#000000',
        marginBottom: 4,
        fontFamily: 'Roboto-Bold'

    },
    nameContainer: {
        marginLeft: 16,
        alignSelf: 'flex-end',
        flexDirection: 'column', // Đảm bảo các phần tử xếp dọc
        position: 'relative', // Để có thể định vị icon_edit
        width: '60%', // Đặt chiều rộng cố định cho container
    },
    role_container: {
        paddingHorizontal: 20,
        paddingVertical: 4,
        backgroundColor: '#F5AC3D',
        borderRadius: 8,
        marginTop: 5,
        alignSelf: 'flex-start', // Căn trái cho role_container
    },
    icon_edit: {
        width: 26,
        height: 26,
        position: 'absolute',
        bottom: 0, // Di chuyển icon xuống dưới
        right: 0, // Căn phải
    },
    camera_button_avatar: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 32,
        borderColor: '#FFFFFF',
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0', // hoặc màu khác tùy bạn
        marginTop: 16,             // khoảng cách với content trên
        marginHorizontal: 16       // padding 2 bên
    },
    divider1: {
        height: 1,
        backgroundColor: '#E0E0E0', // hoặc màu khác tùy bạn
        // khoảng cách với content trên
        marginHorizontal: 16       // padding 2 bên
    },
    role: {
        color: '#FFFFFF'
    }
});
export default AccountScreen
