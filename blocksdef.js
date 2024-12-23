
// Sentry Enable Disable
const SENTRY_ENABLE = '启用';
const SENTRY_DISABLE = '关闭';

// LED color type
const SENTRY_LED_CLOSE = '关闭';
const SENTRY_LED_RED = '红色';
const SENTRY_LED_GREEN = '绿色';
const SENTRY_LED_YELLOW = '黄色';
const SENTRY_LED_BLUE = '蓝色';
const SENTRY_LED_PURPLE = '紫色';
const SENTRY_LED_CYAN = '青色';
const SENTRY_LED_WHITE = '白色';

// Sentry White Balance Type
const SENTRY_AWB_AUTO = '自动';
const SENTRY_AWB_LOCK = '锁定白平衡';
const SENTRY_AWB_WHITE_LIGHT = '白光模式';
const SENTRY_AWB_YELLOW_LIGHT = '黄光模式';

// Sentry State Value Type
const SENTRY_STATE_VALUE = '结果'
const SENTRY_STATE_VALUE_X = '横向坐标';
const SENTRY_STATE_VALUE_Y = '纵向坐标';
const SENTRY_STATE_VALUE_WIDTH = '宽度';
const SENTRY_STATE_VALUE_HEIGHT = '高度';
const SENTRY_STATE_VALUE_LABEL = '标签';

const SENTRY_STATE_VALUE_R = '红色通道';
const SENTRY_STATE_VALUE_G = '绿色通道';
const SENTRY_STATE_VALUE_B = '蓝色通道';

const SENTRY_STATE_LINE_EX = '线段终点X坐标';
const SENTRY_STATE_LINE_EY = '线段终点Y坐标';
const SENTRY_STATE_LINE_SX = '线段起点X坐标';
const SENTRY_STATE_LINE_SY = '线段起点Y坐标';
const SENTRY_STATE_LINE_A = '线段的倾斜角度';

// Sentry Color Type
const SENTRY_COLOR_BLACK = '黑色';
const SENTRY_COLOR_WHITE = '白色';
const SENTRY_COLOR_RED = '红色';
const SENTRY_COLOR_GREEN = '绿色';
const SENTRY_COLOR_BLUE = '蓝色';
const SENTRY_COLOR_YELLOW = '黄色';
const SENTRY_COLOR_UNKNOWN = '其他';

// Sentry Vision type
const SENTRY_VISION_VISIONCOLOR = '颜色识别';
const SENTRY_VISION_VISIONBLOB = '色块检测';
const SENTRY_VISION_VISIONBALL = '球体检测';
const SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
const SENTRY_VISION_VISIONLINE = '线段检测';
const SENTRY_VISION_VISIONLEARNING = '机器学习';
const SENTRY_VISION_VISIONCARD = '卡片识别';
const SENTRY_VISION_VISIONBODY = '人体检测';
const SENTRY_VISION_VISIONFACE = '人脸识别';
const SENTRY_VISION_VISION20CLASSES = '20分类识别';
const SENTRY_VISION_VISIONQRCODE = '二维码识别';
const SENTRY_VISION_VISIONOBJTRACK = '物体训练与追踪';
const SENTRY_VISION_VISIONMOTIONDETECT = '运动物体检测';
const SENTRY_VISION_VISIONCUSTOM = '自定义';

// Sentry Card Type
const SENTRY_CARD_FORWARD = '前进';
const SENTRY_CARD_LEFT = '左';
const SENTRY_CARD_RIGHT = '右';
const SENTRY_CARD_TURN_AROUND = '掉头';
const SENTRY_CARD_PARK = '暂停';
const SENTRY_CARD_GREEN_LIGHT = '绿灯';
const SENTRY_CARD_RED_LIGHT = '红灯';
const SENTRY_CARD_SPEED_40 = '速度40';
const SENTRY_CARD_SPEED_60 = '速度60';
const SENTRY_CARD_SPEED_80 = '速度80';
const SENTRY_CARD_CHECK = '对勾';
const SENTRY_CARD_CROSS = '叉号';
const SENTRY_CARD_CIRCLE = '圆圈';
const SENTRY_CARD_SQUARE = '正方形';
const SENTRY_CARD_TRIANGLE = '三角形';
const SENTRY_CARD_PLUS = '加号';
const SENTRY_CARD_MINUS = '减号';
const SENTRY_CARD_DIVIDE = '除号';
const SENTRY_CARD_EQUAL = '等于号';
const SENTRY_CARD_1 = '1';
const SENTRY_CARD_2 = '2';
const SENTRY_CARD_3 = '3';
const SENTRY_CARD_4 = '4';
const SENTRY_CARD_5 = '5';
const SENTRY_CARD_6 = '6';
const SENTRY_CARD_7 = '7';
const SENTRY_CARD_8 = '8';
const SENTRY_CARD_9 = '9';
const SENTRY_CARD_0 = '0';
const SENTRY_CARD_A = 'A';
const SENTRY_CARD_B = 'B';
const SENTRY_CARD_C = 'C';
const SENTRY_CARD_D = 'D';
const SENTRY_CARD_E = 'E';
const SENTRY_CARD_F = 'F';
const SENTRY_CARD_G = 'G';
const SENTRY_CARD_H = 'H';
const SENTRY_CARD_I = 'I';
const SENTRY_CARD_J = 'J';
const SENTRY_CARD_K = 'K';
const SENTRY_CARD_L = 'L';
const SENTRY_CARD_N = 'N';
const SENTRY_CARD_O = 'O';
const SENTRY_CARD_R = 'R';
const SENTRY_CARD_S = 'S';
const SENTRY_CARD_T = 'T';
const SENTRY_CARD_U = 'U';
const SENTRY_CARD_V = 'V';
const SENTRY_CARD_W = 'W';
const SENTRY_CARD_X = 'X';
const SENTRY_CARD_Y = 'Y';
const SENTRY_CARD_Z = 'Z';

const SENTRY_BALLTABLETENNIS = '乒乓球';
const SENTRY_BALLTENNIS = '网球';

const SENTRY_VISION_ENTERPRISE = '(仅企业版)'

// Sentry1模块文本
const SENTRY1_BEGIN_MESSAGE0 = '初始化 Sentry1 端口 %1 地址 %2';
const SENTRY1_SET_DEFAULT_MESSAGE0 = ' Sentry1 恢复默认参数';
const SENTRY1_LED_SET_COLOR_MESSAGE0 = '设置 Sentry1 LED 检测到结果 %2 否则 %3 亮度(0~15) %1';
const SENTRY1_VISION_SET_STATUS_MESSAGE0 = 'Sentry1 %1 算法 %2';
const SENTRY1_SET_PARAMNUM_MESSAGE0 = '设置 Sentry1 算法 %1 参数个数 %2';
const SENTRY1_COLORPARAM_MESSAGE0 = '设置 Sentry1 算法 %1 区域中心 横坐标 %2 纵坐标 %3 宽度 %4 高度 %5 索引 %6';
const SENTRY1_BOLDPARAM_MESSAGE0 = '设置 Sentry1 算法 %1 最小宽度 %2 高度 %3 检测标签 %4 索引 %5';
const SENTRY1_CAMERA_SET_AWB_MESSAGE0 = '设置 Sentry1 摄像头白平衡 %1';
const SENTRY1_DETECTED_MESSAGE0 = 'Sentry1 算法 %1 检测结果数量';
const SENTRY1_GET_VALUE_MESSAGE0 = 'Sentry1 算法 %1  %2 索引 %3';
const SENTRY1_COLORRCGVALUE_MESSAGE0 = 'Sentry1 颜色识别 %1 索引 %2';
const SENTRY1_QRRCGVALUE_MESSAGE0 = ' Sentry1 二维码识别 %1';
const SENTRY1_GET_QRCODEVALUE_MESSAGE0 = 'Sentry1 二维码识别结果字符串';
const SENTRY1_LINEVALUE_MESSAGE0 = 'Sentry1 线段检测结果 %1 索引 %2';
const SENTRY1_DETECTEDCOLOR_MESSAGE0 = 'Sentry1 颜色识别算法检测到 %1 索引 %2';
const SENTRY1_DETECTEDBLOB_MESSAGE0 = 'Sentry1 色块检测算法检测到 %1 索引 %2';
const SENTRY1_DETECTEDCARD_MESSAGE0 = 'Sentry1 卡片识别算法检测到 %1 索引 %2';
const SENTRY1_DETECTEDBALL_MESSAGE0 = 'Sentry1 球体检测算法检测到 %1 索引 %2';

const Sentry_SetupMode_Color = "#EF5411";
const Sentry_RunMode_Color = "#EAA20A";


const  sentry = [
  ["0x60", "0"],
  ["0x61", "1"],
  ["0x62", "2"],
  ["0x63", "3"],
];

var sentry1_vision_objs = [
  [SENTRY_VISION_VISIONBLOB, "sentry1_vision_e.kVisionBlob"],
  [SENTRY_VISION_VISIONCOLOR, "sentry1_vision_e.kVisionColor"],
  [SENTRY_VISION_VISIONBALL, "sentry1_vision_e.kVisionBall"],
  [SENTRY_VISION_VISIONLINE, "sentry1_vision_e.kVisionLine"],
  [SENTRY_VISION_VISIONCARD, "sentry1_vision_e.kVisionCard"],
  [SENTRY_VISION_VISIONBODY, "sentry1_vision_e.kVisionBody"],
  [SENTRY_VISION_VISIONQRCODE + SENTRY_VISION_ENTERPRISE, "sentry1_vision_e.kVisionQrCode"],
  [SENTRY_VISION_VISIONMOTIONDETECT + SENTRY_VISION_ENTERPRISE, "sentry1_vision_e.kVisionMotionDetect"],
];


// 初始化 Sentry1
Blockly.Blocks["Sentry1Begin"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "InitType",
          options: [
            ["i2c0", "i2c0"]
          ],
          type: "field_dropdown",
        },
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: SENTRY1_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 恢复默认设置
Blockly.Blocks["Sentry1SetDefault"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,

      message0: SENTRY1_SET_DEFAULT_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 启用算法
Blockly.Blocks["Sentry1VisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionStatus",
          options: [
            [SENTRY_ENABLE, "Begin"],
            [SENTRY_DISABLE, "End"],
          ],
          type: "field_dropdown",
        },
        {
          name: "VisionType",
          options: sentry1_vision_objs,
          type: "field_dropdown",
        },
      ],
      message0: SENTRY1_VISION_SET_STATUS_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 设置 LED
Blockly.Blocks["Sentry1LedSetColor"] = {
  init: function () {
    this.jsonInit({
      colour: "#EF5411",
      args0: [
        {
          check: "Number",
          type: "input_value",
          name: "level",
        },
        {
          type: "field_dropdown",
          name: "detected_color",
          options: [
            [SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
            [SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
            [SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
            [SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
            [SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
            [SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
            [SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
            [SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
          ],
        },
        {
          type: "field_dropdown",
          name: "undetected_color",
          options: [
            [SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
            [SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
            [SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
            [SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
            [SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
            [SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
            [SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
            [SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
          ],
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY1_LED_SET_COLOR_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["Sentry1SetParamNum"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: sentry1_vision_objs,
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "max_num",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: SENTRY1_SET_PARAMNUM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1SetColorParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY_VISION_VISIONCOLOR, "sentry1_vision_e.kVisionColor"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "x",
        },
        {
          check: "Number",
          type: "input_value",
          name: "y",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY1_COLORPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1SetBlodParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY_VISION_VISIONBLOB, "sentry1_vision_e.kVisionBlob"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
        {
          type: "field_dropdown",
          name: "lable",
          options: [
            [SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY1_BOLDPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1CameraSetAwb"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "awb",
          options: [
            [SENTRY_AWB_AUTO, "sentry_camera_white_balance_e.kAutoWhiteBalance"],
            [SENTRY_AWB_LOCK, "sentry_camera_white_balance_e.kLockWhiteBalance"],
            [SENTRY_AWB_WHITE_LIGHT, "sentry_camera_white_balance_e.kWhiteLight"],
            [SENTRY_AWB_YELLOW_LIGHT, "sentry_camera_white_balance_e.kYellowLight"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY1_CAMERA_SET_AWB_MESSAGE0,
      inputsInline: true,
    });
  },
};


Blockly.Blocks["Sentry1Detected"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "VisionType",
          options: sentry1_vision_objs,
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY1_DETECTED_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1GetValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "VisionType",
          options: sentry1_vision_objs,
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
            [SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY1_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1ColorRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
            [SENTRY_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
            [SENTRY_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
            [SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY1_COLORRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1QrRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY1_QRRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1GetQrCodeValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: SENTRY1_GET_QRCODEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1LineValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
            [SENTRY_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY1_LINEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1DetectedColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
            [SENTRY_COLOR_UNKNOWN, "color_label_e.kColorUnkown"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY1_DETECTEDCOLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1DetectedBlob"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
            [SENTRY_COLOR_UNKNOWN, "color_label_e.kColorUnkown"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY1_DETECTEDBLOB_MESSAGE0,
    });
  },
};


Blockly.Blocks["Sentry1DetectedCard"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [SENTRY_CARD_FORWARD, "sentry1_card_label_e.kCardForward"],
            [SENTRY_CARD_LEFT, "sentry1_card_label_e.kCardLeft"],
            [SENTRY_CARD_RIGHT, "sentry1_card_label_e.kCardRight"],
            [SENTRY_CARD_TURN_AROUND, "sentry1_card_label_e.kCardTurnAround"],
            [SENTRY_CARD_PARK, "sentry1_card_label_e.kCardPark"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY1_DETECTEDCARD_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1DetectedBall"] = {
  init: function () {
    this.jsonInit({
      colour: "#EAA20A",
      args0: [
        {
          name: "card",
          options: [
            [SENTRY_BALLTABLETENNIS, "sentry1_ball_label_e.kBallTableTennis"],
            [SENTRY_BALLTENNIS, "sentry1_ball_label_e.kBallTennis"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY1_DETECTEDBALL_MESSAGE0,
    });
  },
};


// 初始化 Sentry
pythonGenerator.forBlock['Sentry1Begin'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var InitType = block.getFieldValue('InitType');
  var code = 'sentry1' + '.begin(' + InitType + ')\n';

  pythonGenerator.definitions_['import_iic'] = 'from machine import I2C';
  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';
  pythonGenerator.definitions_['init_IIC'] = 'i2c0 = I2C(0,freq=400000)';
  pythonGenerator.definitions_['init_Sentry1' + sentry] = 'sentry1' + ' = Sentry(0x5, 0x6' + sentry + ')';

  return code;
};

// 恢复默认设置
pythonGenerator.forBlock['Sentry1SetDefault'] = function (block) {

  var code = 'sentry1' + '.SensorSetDefault()\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 启用算法
pythonGenerator.forBlock['Sentry1VisionSetStatus'] = function (block) {

  var VisionStatus = block.getFieldValue('VisionStatus');
  var VisionType = block.getFieldValue('VisionType');
  var code = 'sentry1' + '.Vision' + VisionStatus + '(' + VisionType + ')\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置 LEDn
pythonGenerator.forBlock['Sentry1LedSetColor'] = function (block) {


  var detected_color = block.getFieldValue('detected_color');
  var undetected_color = block.getFieldValue('undetected_color');
  var level = pythonGenerator.valueToCode(block, "level", pythonGenerator.ORDER_NONE) || '1';
  var code = 'sentry1' + '.LedSetColor(' + detected_color + ', ' + undetected_color + ', ' + level + ')\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置算法参数
pythonGenerator.forBlock['Sentry1SetParamNum'] = function (block) {

  var VisionType = block.getFieldValue('VisionType');
  var max_num = pythonGenerator.valueToCode(block, "max_num", pythonGenerator.ORDER_NONE);
  var code = 'sentry1' + '.SetParamNum(' + VisionType + ', ' + max_num + ')\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};


// Color 算法参数
pythonGenerator.forBlock['Sentry1SetColorParam'] = function (block) {
  var x = pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) || '1';
  var y = pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) || '1';
  var w = pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || '1';
  var h = pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || '1';
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_ATOMIC);
  var code = 'sentry1' + '.SetParam(' + 'sentry1_vision_e.kVisionColor, [' + x + ', ' + y + ', ' + w + ', ' + h + ', 0]' + ', ' + objid + ')\n';

  return code;
};


// Blod 算法参数
pythonGenerator.forBlock['Sentry1SetBlodParam'] = function (block) {
  var w = pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || '1';
  var h = pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || '1';
  var lable = block.getFieldValue('lable');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_ATOMIC);
  var code = 'sentry1' + '.SetParam(' + 'sentry1_vision_e.kVisionBlob, ' + '[0, 0, ' + w + ', ' + h + ', ' + lable + ']' + ', ' + objid + ')\n';

  return code;
};


pythonGenerator.forBlock['Sentry1CameraSetAwb'] = function (block) {


  var awb = block.getFieldValue('awb');

  var code = 'sentry1' + '.CameraSetAwb(' + awb + ')\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

pythonGenerator.forBlock['Sentry1Detected'] = function (block) {

  var VisionType = block.getFieldValue('VisionType');
  var code = 'sentry1' + '.GetValue(' + VisionType + ', sentry_obj_info_e.kStatus)';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1GetValue'] = function (block) {

  var VisionType = block.getFieldValue('VisionType');
  var objinfo = block.getFieldValue('objinfo');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';
  var code = 'sentry1' + '.GetValue(' + VisionType + ', ' + objinfo + ', ' + objid + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1ColorRcgValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';
  var code = 'sentry1' + '.GetValue(sentry1_vision_e.kVisionColor, ' + objinfo + ', ' + objid + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1QrRcgValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var code = 'sentry1' + '.GetValue(sentry1_vision_e.kVisionQrCode, ' + objinfo + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry1GetQrCodeValue'] = function (block) {

  var code = 'sentry1' + '.GetQrCodeValue()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1LineValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';
  var code = 'sentry1' + '.GetValue(sentry1_vision_e.kVisionLine, ' + objinfo  + ', ' + objid + ')'

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1DetectedColor'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionColor, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1DetectedBlob'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1DetectedCard'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionCard, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry1DetectedBall'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionBall, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry1GetQrCodeValue'] = function (block) {

  var code = 'sentry1' + '.GetQrCodeValue()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry1Rows'] = function (block) {

  var code = 'sentry1' + '.Rows()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry1Cols'] = function (block) {

  var code = 'sentry1' + '.Cols()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};