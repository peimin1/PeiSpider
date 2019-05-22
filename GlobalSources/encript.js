var util = require('util');
var crypto = require('crypto');


module.exports = {
    md5: (str) => {
        return crypto.createHash('md5').update(str).digest('hex').toUpperCase();
    },
    sha1: (str) => {
        return crypto.createHash('sha1').update(str).digest('hex').toUpperCase();
    },
    get_finger: () => {
        return get_finger();
    }

};


// 伪造时间戳加密
function get_sha1(e, t) {
    for (var i = 0, a = Math.pow(2, 32 - t); ;) {
        var o = i.toString(16) + ":" + e;
        i++;
        var s = module.exports.sha1(o);
        if (parseInt(s.substr(0, 8), 16) < a)
            return o
    }
}

function get_t(e) {
    for (var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", r = "", n = 0; e > n; ++n)
        r += t.substr(Math.floor(Math.random() * t.length), 1);
    return r
}

function get_proof() {
    n = (new Date).getTime() + ":" + get_t(20);
    return get_sha1(n, 8)
}

// 伪造浏览器指纹
function get_finger() {
    var proof1 = get_proof();
    // 需要在这里填入相关的浏览器指纹信息， 比如: 窗口大小， 分辨率， CPU等
    var finger = util.format(`{"proof":"%s","fp2":{"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36","language":"zh-CN","screen":{"width":1920,"height":1080,"availHeight":1040,"availWidth":1920,"pixelDepth":24,"innerWidth":537,"innerHeight":937,"outerWidth":1920,"outerHeight":1040,"devicePixelRatio":1},"timezone":8,"indexedDb":true,"addBehavior":false,"openDatabase":true,"cpuClass":"unknown","platform":"Win32","doNotTrack":"unknown","plugins":"Chrome PDF Plugin::Portable Document Format::application/x-google-chrome-pdf~pdf;Chrome PDF Viewer::::application/pdf~pdf;Native Client::::application/x-nacl~,application/x-pnacl~","canvas":{"winding":"yes","towebp":true,"blending":true,"img":"4f1ed4406b8e3a3f2b0c28e6805963c722e4ef6f"},"webGL":{"img":"bd6549c125f67b18985a8c509803f4b883ff810c","extensions":"ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;WEBKIT_EXT_texture_filter_anisotropic;EXT_sRGB;OES_element_index_uint;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBKIT_WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBKIT_WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBKIT_WEBGL_lose_context","aliased line width range":"[1, 1]","aliased point size range":"[1, 1024]","alpha bits":8,"antialiasing":"yes","blue bits":8,"depth bits":24,"green bits":8,"max anisotropy":16,"max combined texture image units":32,"max cube map texture size":16384,"max fragment uniform vectors":1024,"max render buffer size":16384,"max texture image units":16,"max texture size":16384,"max varying vectors":30,"max vertex attribs":16,"max vertex texture image units":16,"max vertex uniform vectors":4096,"max viewport dims":"[16384, 16384]","red bits":8,"renderer":"WebKit WebGL","shading language version":"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)","stencil bits":0,"vendor":"WebKit","version":"WebGL 1.0 (OpenGL ES 2.0 Chromium)","vertex shader high float precision":23,"vertex shader high float precision rangeMin":127,"vertex shader high float precision rangeMax":127,"vertex shader medium float precision":23,"vertex shader medium float precision rangeMin":127,"vertex shader medium float precision rangeMax":127,"vertex shader low float precision":23,"vertex shader low float precision rangeMin":127,"vertex shader low float precision rangeMax":127,"fragment shader high float precision":23,"fragment shader high float precision rangeMin":127,"fragment shader high float precision rangeMax":127,"fragment shader medium float precision":23,"fragment shader medium float precision rangeMin":127,"fragment shader medium float precision rangeMax":127,"fragment shader low float precision":23,"fragment shader low float precision rangeMin":127,"fragment shader low float precision rangeMax":127,"vertex shader high int precision":0,"vertex shader high int precision rangeMin":31,"vertex shader high int precision rangeMax":30,"vertex shader medium int precision":0,"vertex shader medium int precision rangeMin":31,"vertex shader medium int precision rangeMax":30,"vertex shader low int precision":0,"vertex shader low int precision rangeMin":31,"vertex shader low int precision rangeMax":30,"fragment shader high int precision":0,"fragment shader high int precision rangeMin":31,"fragment shader high int precision rangeMax":30,"fragment shader medium int precision":0,"fragment shader medium int precision rangeMin":31,"fragment shader medium int precision rangeMax":30,"fragment shader low int precision":0,"fragment shader low int precision rangeMin":31,"fragment shader low int precision rangeMax":30},"touch":{"maxTouchPoints":0,"touchEvent":false,"touchStart":false},"video":{"ogg":"probably","h264":"probably","webm":"probably"},"audio":{"ogg":"probably","mp3":"probably","wav":"probably","m4a":"maybe"},"vendor":"Google Inc.","product":"Gecko","productSub":"20030107","browser":{"ie":false,"chrome":true,"webdriver":false},"window":{"historyLength":7,"hardwareConcurrency":4,"iframe":false},"fonts":"Calibri;Marlett;SimHei"},"cookies":1,"setTimeout":0,"setInterval":0,"appName":"Netscape","platform":"Win32","syslang":"zh-CN","userlang":"zh-CN","cpu":"","productSub":"20030107","plugins":{"0":"Chrome PDF Plugin ","1":"Chrome PDF Viewer ","2":"Native Client "},"mimeTypes":{"0":" application/pdf","1":"Portable Document Format application/x-google-chrome-pdf","2":"Native Client Executable application/x-nacl","3":"Portable Native Client Executable application/x-pnacl"},"screen":{"width":1920,"height":1080,"colorDepth":24},"fonts":{"0":"Calibri","1":"Cambria","2":"Times","3":"Constantia","4":"Georgia","5":"Segoe UI","6":"Candara","7":"Trebuchet MS","8":"Verdana","9":"Consolas","10":"Lucida Console","11":"DejaVu Sans Mono","12":"Courier New","13":"Courier"}}`, proof1);
    return encodeURIComponent(finger.replace(/[\s]+/g, ""));
}

