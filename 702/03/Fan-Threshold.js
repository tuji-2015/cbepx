let temp = localStorage.getItem("fancontrol");
var payload = [233,0,0,0,0,65,85,65,84,85,83,72,129,236,24,1,0,0,232,101,14,0,0,232,27,9,0,0,49,192,72,141,92,36,16,232,222,8,0,0,232,204,1,0,0,76,141,37,52,25,0,0,72,141,21,197,17,0,0,72,141,45,142,25,0,0,65,138,4,36,131,232,55,60,45,119,30,49,210,49,246,72,141,61,202,17,0,0,232,172,0,0,0,133,192,65,137,197,127,22,72,141,21,196,17,0,0,190,0,1,0,0,72,137,223,49,192,255,85,0,235,95,49,192,72,141,124,36,6,185,10,0,0,0,72,141,84,36,6,243,170,65,138,4,36,190,7,143,28,192,68,137,239,136,68,36,11,232,194,13,0,0,68,137,239,232,107,0,0,0,65,15,182,12,36,190,5,0,0,0,72,137,223,141,4,201,153,247,254,72,141,21,136,17,0,0,190,0,1,0,0,131,192,32,197,250,42,192,49,192,197,122,44,192,255,85,0,72,137,223,232,125,1,0,0,72,129,196,24,1,0,0,49,192,91,93,65,92,65,93,195,72,199,192,3,0,0,0,233,216,16,0,0,72,199,192,4,0,0,0,233,204,16,0,0,72,199,192,5,0,0,0,233,192,16,0,0,72,199,192,6,0,0,0,233,180,16,0,0,72,199,192,10,0,0,0,233,168,16,0,0,72,199,192,9,0,0,0,233,156,16,0,0,72,199,192,58,0,0,0,233,144,16,0,0,72,199,192,57,0,0,0,233,132,16,0,0,72,199,192,21,0,0,0,233,120,16,0,0,72,199,192,122,1,0,0,233,108,16,0,0,72,199,192,22,0,0,0,233,96,16,0,0,72,199,192,123,0,0,0,233,84,16,0,0,72,199,192,124,0,0,0,233,72,16,0,0,72,199,192,128,0,0,0,233,60,16,0,0,72,199,192,136,0,0,0,233,48,16,0,0,72,199,192,137,0,0,0,233,36,16,0,0,72,199,192,188,0,0,0,233,24,16,0,0,72,199,192,189,0,0,0,233,12,16,0,0,72,199,192,190,0,0,0,233,0,16,0,0,72,199,192,16,1,0,0,233,244,15,0,0,72,199,192,222,1,0,0,233,232,15,0,0,72,199,192,237,1,0,0,233,220,15,0,0,85,83,80,72,141,29,77,26,0,0,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,88,16,0,0,255,19,49,201,69,49,201,137,197,69,49,192,49,210,49,246,72,141,61,103,16,0,0,255,19,72,141,21,66,23,0,0,137,239,137,195,72,141,53,127,16,0,0,232,82,0,0,0,72,141,21,59,23,0,0,137,223,89,72,141,53,146,16,0,0,91,93,233,58,0,0,0,83,72,137,250,72,129,236,0,2,0,0,72,141,13,208,24,0,0,72,137,231,72,141,53,144,16,0,0,49,192,255,17,72,141,5,243,22,0,0,72,137,230,191,222,0,0,0,255,16,72,129,196,0,2,0,0,91,195,72,199,192,79,2,0,0,233,49,15,0,0,72,199,192,80,2,0,0,233,37,15,0,0,72,137,241,80,49,210,72,137,254,69,49,192,191,82,2,0,0,49,192,232,10,15,0,0,90,195,72,139,71,8,76,139,72,72,76,139,64,64,72,139,70,8,102,139,0,102,61,249,1,15,132,87,3,0,0,15,135,11,1,0,0,102,61,194,1,15,132,199,2,0,0,15,135,153,0,0,0,102,61,144,1,15,132,87,2,0,0,119,62,102,61,99,1,15,132,11,2,0,0,102,61,114,1,15,132,33,2,0,0,102,61,94,1,15,133,174,4,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,48,63,181,0,72,5,48,21,92,1,233,47,4,0,0,102,61,149,1,15,132,45,2,0,0,119,15,102,61,145,1,15,132,1,2,0,0,233,115,4,0,0,102,61,150,1,15,132,50,2,0,0,102,61,151,1,15,133,95,4,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,208,180,193,0,72,5,16,39,214,1,233,224,3,0,0,102,61,217,1,15,132,94,2,0,0,119,43,102,61,214,1,15,132,50,2,0,0,119,15,102,61,199,1,15,132,6,2,0,0,233,24,4,0,0,102,61,215,1,15,132,55,2,0,0,102,61,216,1,235,16,102,61,244,1,15,132,71,2,0,0,119,15,102,61,218,1,15,132,27,2,0,0,233,237,3,0,0,102,61,245,1,15,132,44,2,0,0,102,61,247,1,235,44,102,61,139,2,15,132,223,2,0,0,15,135,130,0,0,0,102,61,44,2,15,132,108,2,0,0,119,52,102,61,38,2,15,132,64,2,0,0,119,15,102,61,251,1,15,132,20,2,0,0,233,166,3,0,0,102,61,41,2,15,132,37,2,0,0,102,61,43,2,15,132,59,2,0,0,233,141,3,0,0,102,61,90,2,15,132,76,2,0,0,119,15,102,61,88,2,15,132,64,2,0,0,233,114,3,0,0,102,61,108,2,15,132,81,2,0,0,102,61,138,2,15,133,94,3,0,0,185,130,0,0,192,15,50,72,193,226,32,72,137,209,233,101,2,0,0,102,61,189,2,15,132,151,2,0,0,119,43,102,61,159,2,15,132,91,2,0,0,119,15,102,61,158,2,15,132,95,2,0,0,233,36,3,0,0,102,61,160,2,15,132,80,2,0,0,102,61,188,2,235,16,102,61,238,2,15,132,128,2,0,0,119,29,102,61,190,2,15,133,254,2,0,0,185,130,0,0,192,15,50,72,137,209,72,193,225,32,233,79,2,0,0,102,61,239,2,15,132,103,2,0,0,102,61,243,2,15,133,215,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,104,181,19,1,72,5,32,98,180,1,233,88,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,240,58,181,0,72,5,48,17,92,1,233,56,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,16,207,181,0,72,5,64,208,92,1,233,24,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,16,118,193,0,72,5,80,232,213,1,233,248,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,224,116,193,0,72,5,32,231,213,1,233,216,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,208,116,193,0,72,5,16,231,213,1,233,184,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,224,3,211,0,72,5,96,100,234,1,233,152,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,112,114,211,0,72,5,160,209,234,1,233,120,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,224,114,211,0,72,5,16,210,234,1,233,88,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,224,132,9,1,72,5,48,24,44,2,233,56,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,224,132,9,1,72,5,176,24,44,2,233,24,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,192,63,19,1,72,5,176,243,46,2,233,248,0,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,192,143,19,1,72,5,176,51,47,2,233,216,0,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,176,152,146,19,1,72,5,0,249,27,2,233,184,0,0,0,185,130,0,0,192,15,50,72,137,209,72,193,225,32,72,9,200,72,141,176,152,210,19,1,72,5,0,57,28,2,233,149,0,0,0,185,130,0,0,192,15,50,72,137,209,72,193,225,32,72,9,200,72,141,176,56,211,19,1,235,40,185,130,0,0,192,15,50,72,137,209,72,193,225,32,235,14,185,130,0,0,192,15,50,72,193,226,32,72,137,209,72,9,200,72,141,176,88,227,19,1,72,5,96,1,48,2,235,75,185,130,0,0,192,15,50,72,193,226,32,72,137,209,72,9,200,72,141,176,216,225,19,1,72,5,144,85,44,2,235,43,185,130,0,0,192,15,50,72,193,226,32,72,137,209,235,14,185,130,0,0,192,15,50,72,137,209,72,193,225,32,72,9,193,72,141,177,64,254,255,255,72,137,240,73,139,144,24,1,0,0,65,199,64,4,0,0,0,0,65,199,64,8,0,0,0,0,65,199,64,20,0,0,0,0,199,2,0,0,0,0,72,139,22,73,137,80,48,72,139,0,73,137,65,32,73,137,65,24,72,139,135,48,1,0,0,72,191,19,0,0,0,0,0,1,56,72,199,64,96,255,255,255,255,72,137,120,88,72,199,64,104,255,255,255,255,49,192,195,131,200,255,195,80,72,141,21,15,20,0,0,49,192,255,18,90,133,192,15,149,192,15,182,192,195,65,86,65,85,65,84,85,83,72,131,236,48,72,141,45,174,17,0,0,102,139,69,0,102,133,192,15,133,234,0,0,0,72,141,124,36,10,185,5,0,0,0,243,170,76,141,45,174,17,0,0,102,199,68,36,8,0,0,72,141,21,136,20,0,0,72,141,92,36,15,77,139,101,0,255,18,72,137,223,72,141,21,86,12,0,0,72,137,193,190,33,0,0,0,49,192,65,255,212,76,141,53,135,18,0,0,72,137,223,72,141,53,81,12,0,0,76,141,100,36,10,65,255,22,72,133,192,72,137,195,117,25,72,141,53,58,12,0,0,72,141,61,54,12,0,0,65,255,22,72,133,192,72,137,195,116,93,72,141,5,189,17,0,0,186,1,0,0,0,190,116,3,0,0,72,137,223,255,16,72,141,5,23,18,0,0,72,137,217,186,2,0,0,0,190,1,0,0,0,72,141,124,36,8,255,16,72,141,5,76,18,0,0,72,137,223,255,16,15,190,76,36,9,72,141,21,255,11,0,0,68,15,190,68,36,8,190,5,0,0,0,76,137,231,49,192,65,255,85,0,72,141,5,120,18,0,0,76,137,231,255,16,102,137,69,0,72,131,196,48,91,93,65,92,65,93,65,94,195,72,131,236,24,49,192,232,200,254,255,255,133,192,117,27,232,213,254,255,255,72,141,61,169,249,255,255,72,141,116,36,14,102,137,68,36,14,232,64,5,0,0,49,192,72,131,196,24,195,72,141,5,18,19,0,0,83,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,172,11,0,0,255,16,72,141,21,149,16,0,0,72,141,53,180,11,0,0,137,199,137,195,232,45,249,255,255,72,141,21,38,18,0,0,137,223,72,141,53,162,11,0,0,232,24,249,255,255,72,141,21,145,16,0,0,137,223,72,141,53,146,11,0,0,232,3,249,255,255,72,141,21,244,16,0,0,137,223,72,141,53,132,11,0,0,232,238,248,255,255,72,141,21,135,17,0,0,137,223,72,141,53,119,11,0,0,232,217,248,255,255,72,141,21,50,17,0,0,137,223,72,141,53,107,11,0,0,232,196,248,255,255,72,141,21,253,15,0,0,137,223,72,141,53,93,11,0,0,232,175,248,255,255,72,141,21,184,16,0,0,137,223,72,141,53,79,11,0,0,232,154,248,255,255,72,141,21,179,15,0,0,137,223,72,141,53,65,11,0,0,232,133,248,255,255,72,141,21,110,16,0,0,137,223,72,141,53,51,11,0,0,232,112,248,255,255,72,141,21,25,16,0,0,137,223,72,141,53,38,11,0,0,232,91,248,255,255,72,141,21,116,16,0,0,137,223,72,141,53,24,11,0,0,232,70,248,255,255,72,141,21,31,17,0,0,137,223,72,141,53,11,11,0,0,232,49,248,255,255,72,141,21,186,16,0,0,137,223,72,141,53,253,10,0,0,232,28,248,255,255,72,141,21,253,15,0,0,137,223,72,141,53,239,10,0,0,232,7,248,255,255,72,141,21,168,16,0,0,137,223,72,141,53,226,10,0,0,232,242,247,255,255,72,141,21,35,15,0,0,137,223,72,141,53,213,10,0,0,232,221,247,255,255,72,141,21,238,15,0,0,137,223,72,141,53,201,10,0,0,232,200,247,255,255,72,141,21,169,16,0,0,137,223,72,141,53,187,10,0,0,232,179,247,255,255,72,141,21,36,15,0,0,137,223,72,141,53,173,10,0,0,232,158,247,255,255,72,141,21,95,15,0,0,137,223,72,141,53,160,10,0,0,232,137,247,255,255,72,141,21,186,15,0,0,137,223,72,141,53,146,10,0,0,232,116,247,255,255,72,141,21,117,15,0,0,137,223,72,141,53,132,10,0,0,232,95,247,255,255,72,141,21,152,15,0,0,137,223,72,141,53,119,10,0,0,232,74,247,255,255,72,141,21,203,14,0,0,137,223,72,141,53,97,10,0,0,232,53,247,255,255,72,141,21,238,15,0,0,137,223,72,141,53,83,10,0,0,232,32,247,255,255,72,141,21,233,15,0,0,137,223,72,141,53,70,10,0,0,232,11,247,255,255,72,141,21,148,14,0,0,137,223,72,141,53,54,10,0,0,232,246,246,255,255,72,141,21,207,14,0,0,137,223,72,141,53,38,10,0,0,232,225,246,255,255,72,141,21,10,14,0,0,137,223,72,141,53,25,10,0,0,232,204,246,255,255,72,141,21,93,14,0,0,137,223,72,141,53,13,10,0,0,232,183,246,255,255,72,141,21,224,14,0,0,137,223,72,141,53,3,10,0,0,232,162,246,255,255,72,141,21,155,14,0,0,137,223,72,141,53,245,9,0,0,232,141,246,255,255,72,141,21,246,14,0,0,137,223,72,141,53,230,9,0,0,232,120,246,255,255,72,141,21,65,14,0,0,137,223,72,141,53,210,9,0,0,232,99,246,255,255,72,141,21,132,13,0,0,137,223,72,141,53,194,9,0,0,232,78,246,255,255,72,141,21,151,14,0,0,137,223,72,141,53,181,9,0,0,232,57,246,255,255,72,141,21,218,13,0,0,137,223,72,141,53,154,9,0,0,232,36,246,255,255,72,141,21,205,14,0,0,137,223,72,141,53,141,9,0,0,232,15,246,255,255,72,141,21,136,14,0,0,137,223,72,141,53,113,9,0,0,232,250,245,255,255,72,141,21,203,14,0,0,137,223,72,141,53,107,9,0,0,232,229,245,255,255,72,141,21,118,14,0,0,137,223,72,141,53,93,9,0,0,232,208,245,255,255,72,141,21,33,14,0,0,137,223,72,141,53,81,9,0,0,232,187,245,255,255,72,141,21,108,14,0,0,137,223,72,141,53,70,9,0,0,232,166,245,255,255,72,141,21,95,13,0,0,137,223,72,141,53,61,9,0,0,232,145,245,255,255,72,141,21,18,14,0,0,137,223,72,141,53,47,9,0,0,232,124,245,255,255,72,141,21,229,12,0,0,137,223,72,141,53,34,9,0,0,232,103,245,255,255,72,141,21,192,12,0,0,137,223,72,141,53,21,9,0,0,232,82,245,255,255,72,141,21,67,14,0,0,137,223,72,141,53,10,9,0,0,232,61,245,255,255,72,141,21,126,12,0,0,137,223,72,141,53,253,8,0,0,232,40,245,255,255,72,141,21,113,12,0,0,137,223,72,141,53,240,8,0,0,232,19,245,255,255,72,141,21,252,13,0,0,137,223,72,141,53,229,8,0,0,232,254,244,255,255,72,141,21,207,12,0,0,137,223,72,141,53,217,8,0,0,232,233,244,255,255,72,141,21,74,12,0,0,137,223,72,141,53,202,8,0,0,232,212,244,255,255,72,141,21,21,13,0,0,137,223,72,141,53,193,8,0,0,232,191,244,255,255,72,141,21,224,12,0,0,137,223,72,141,53,178,8,0,0,232,170,244,255,255,72,141,21,107,13,0,0,137,223,72,141,53,163,8,0,0,232,149,244,255,255,72,141,21,70,12,0,0,137,223,72,141,53,149,8,0,0,232,128,244,255,255,72,141,21,225,12,0,0,137,223,72,141,53,134,8,0,0,232,107,244,255,255,72,141,21,220,12,0,0,137,223,72,141,53,119,8,0,0,232,86,244,255,255,137,223,72,141,21,237,11,0,0,91,72,141,53,104,8,0,0,233,64,244,255,255,72,199,192,37,0,0,0,233,113,3,0,0,72,199,192,54,0,0,0,233,101,3,0,0,72,199,192,11,0,0,0,233,89,3,0,0,85,83,82,72,141,29,42,13,0,0,72,141,45,163,13,0,0,72,141,61,80,5,0,0,72,137,222,72,199,69,0,0,0,0,0,232,12,244,255,255,133,192,116,34,72,137,222,72,141,61,17,8,0,0,232,249,243,255,255,133,192,116,15,72,137,222,72,141,61,17,8,0,0,232,230,243,255,255,139,59,72,141,53,22,8,0,0,72,141,21,222,12,0,0,232,185,243,255,255,139,59,72,141,53,19,8,0,0,72,141,21,9,13,0,0,232,164,243,255,255,139,59,72,137,234,72,141,53,12,8,0,0,232,147,243,255,255,139,59,72,141,53,6,8,0,0,72,141,21,251,12,0,0,232,126,243,255,255,139,59,72,141,53,0,8,0,0,72,141,21,38,13,0,0,232,105,243,255,255,139,59,72,141,53,4,8,0,0,72,141,21,65,13,0,0,232,84,243,255,255,139,59,72,141,53,13,8,0,0,72,141,21,172,12,0,0,232,63,243,255,255,139,59,72,141,53,17,8,0,0,72,141,21,87,12,0,0,232,42,243,255,255,139,59,72,141,53,25,8,0,0,72,141,21,202,12,0,0,232,21,243,255,255,139,59,72,141,53,18,8,0,0,72,141,21,21,13,0,0,232,0,243,255,255,139,59,72,141,53,11,8,0,0,72,141,21,120,12,0,0,232,235,242,255,255,139,59,72,141,53,4,8,0,0,72,141,21,131,12,0,0,232,214,242,255,255,139,59,72,141,53,254,7,0,0,72,141,21,142,12,0,0,232,193,242,255,255,139,59,72,141,53,248,7,0,0,72,141,21,241,11,0,0,232,172,242,255,255,139,59,72,141,53,242,7,0,0,72,141,21,140,12,0,0,232,151,242,255,255,139,59,72,141,53,237,7,0,0,72,141,21,143,11,0,0,232,130,242,255,255,139,59,72,141,53,238,7,0,0,72,141,21,74,12,0,0,232,109,242,255,255,139,59,72,141,53,241,7,0,0,72,141,21,165,11,0,0,232,88,242,255,255,139,59,72,141,53,243,7,0,0,72,141,21,200,11,0,0,232,67,242,255,255,139,59,72,141,53,229,7,0,0,72,141,21,99,12,0,0,232,46,242,255,255,139,59,72,141,53,221,7,0,0,72,141,21,142,11,0,0,232,25,242,255,255,139,59,72,141,53,208,7,0,0,72,141,21,57,11,0,0,232,4,242,255,255,139,59,72,141,53,194,7,0,0,72,141,21,244,11,0,0,232,239,241,255,255,139,59,72,141,53,186,7,0,0,72,141,21,175,11,0,0,232,218,241,255,255,139,59,72,141,53,188,7,0,0,72,141,21,210,11,0,0,232,197,241,255,255,139,59,72,141,53,189,7,0,0,72,141,21,5,11,0,0,232,176,241,255,255,139,59,72,141,53,190,7,0,0,72,141,21,152,11,0,0,232,155,241,255,255,139,59,72,141,53,191,7,0,0,72,141,21,179,11,0,0,232,134,241,255,255,139,59,72,141,53,192,7,0,0,72,141,21,206,10,0,0,232,113,241,255,255,139,59,72,141,53,178,7,0,0,72,141,21,113,10,0,0,232,92,241,255,255,139,59,72,141,53,164,7,0,0,72,141,21,132,10,0,0,232,71,241,255,255,139,59,72,141,53,150,7,0,0,72,141,21,79,11,0,0,232,50,241,255,255,139,59,72,141,53,136,7,0,0,72,141,21,194,10,0,0,232,29,241,255,255,139,59,72,141,53,122,7,0,0,72,141,21,237,10,0,0,232,8,241,255,255,139,59,72,141,53,110,7,0,0,72,141,21,136,10,0,0,232,243,240,255,255,139,59,72,141,53,98,7,0,0,72,141,21,3,11,0,0,232,222,240,255,255,139,59,72,141,53,109,7,0,0,72,141,21,142,10,0,0,88,91,93,233,198,240,255,255,72,49,192,73,137,202,15,5,114,1,195,72,131,61,75,10,0,0,0,116,24,80,255,21,66,10,0,0,89,137,8,72,199,192,255,255,255,255,72,199,194,255,255,255,255,195,85,110,115,97,102,101,32,70,97,110,32,84,104,114,101,115,104,111,108,100,33,32,83,107,105,112,112,105,110,103,46,46,46,0,47,100,101,118,47,105,99,99,95,102,97,110,0,85,110,97,98,108,101,32,116,111,32,79,112,101,110,32,70,97,110,32,83,101,116,116,105,110,103,115,33,0,70,97,110,32,84,104,114,101,115,104,111,108,100,32,83,101,116,32,116,111,32,37,105,194,176,67,47,37,105,194,176,70,33,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,85,116,105,108,46,115,112,114,120,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,46,115,112,114,120,0,115,99,101,83,121,115,85,116,105,108,83,101,110,100,83,121,115,116,101,109,78,111,116,105,102,105,99,97,116,105,111,110,87,105,116,104,84,101,120,116,0,115,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,76,97,117,110,99,104,87,101,98,66,114,111,119,115,101,114,0,37,115,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,85,115,101,114,83,101,114,118,105,99,101,46,115,112,114,120,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,73,110,105,116,105,97,108,105,122,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,76,111,103,105,110,85,115,101,114,73,100,76,105,115,116,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,84,101,114,109,105,110,97,116,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,85,115,101,114,78,97,109,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,73,110,105,116,105,97,108,85,115,101,114,0,83,99,101,83,121,115,67,111,114,101,82,101,98,111,111,116,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,107,101,114,110,101,108,46,115,112,114,120,0,115,99,101,75,101,114,110,101,108,82,101,98,111,111,116,0,51,53,48,0,51,53,53,0,51,55,48,0,52,48,48,0,52,48,49,0,52,48,53,0,52,48,54,0,52,48,55,0,52,53,48,0,52,53,53,0,52,55,48,0,52,55,49,0,52,55,50,0,52,55,51,0,52,55,52,0,53,48,48,0,53,48,49,0,53,48,51,0,53,48,53,0,53,48,55,0,53,53,48,0,53,53,51,0,53,53,53,0,53,53,54,0,54,48,48,0,54,48,50,0,54,50,48,0,54,53,48,0,54,53,49,0,54,55,48,0,54,55,49,0,54,55,50,0,55,48,48,0,55,48,49,0,55,48,50,0,55,53,48,0,55,53,49,0,55,53,53,0,47,37,115,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,99,46,115,112,114,120,0,114,98,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,99,46,115,112,114,120,0,37,48,50,120,37,48,50,120,0,37,115,37,99,37,99,0,37,105,0,48,46,48,37,99,0,48,46,37,99,37,99,0,37,99,37,99,46,37,99,37,99,0,108,105,98,83,99,101,76,105,98,99,73,110,116,101,114,110,97,108,46,115,112,114,120,0,109,97,108,108,111,99,0,102,114,101,101,0,99,97,108,108,111,99,0,114,101,97,108,108,111,99,0,109,101,109,97,108,105,103,110,0,109,101,109,115,101,116,0,109,101,109,99,112,121,0,109,101,109,99,109,112,0,115,116,114,99,112,121,0,115,116,114,110,99,112,121,0,115,116,114,99,97,116,0,115,116,114,110,99,97,116,0,115,116,114,108,101,110,0,115,116,114,99,109,112,0,115,116,114,110,99,109,112,0,115,112,114,105,110,116,102,0,115,110,112,114,105,110,116,102,0,115,115,99,97,110,102,0,115,116,114,99,104,114,0,115,116,114,114,99,104,114,0,115,116,114,115,116,114,0,115,116,114,100,117,112,0,115,116,114,116,111,107,0,114,105,110,100,101,120,0,105,115,100,105,103,105,116,0,97,116,111,105,0,97,116,111,102,0,115,116,114,108,99,112,121,0,115,116,114,101,114,114,111,114,0,95,71,101,116,112,99,116,121,112,101,0,95,83,116,111,117,108,0,98,99,111,112,121,0,115,114,97,110,100,0,97,115,99,116,105,109,101,0,97,115,99,116,105,109,101,95,114,0,103,109,116,105,109,101,0,103,109,116,105,109,101,95,115,0,108,111,99,97,108,116,105,109,101,0,108,111,99,97,108,116,105,109,101,95,114,0,109,107,116,105,109,101,0,111,112,101,110,100,105,114,0,114,101,97,100,100,105,114,0,114,101,97,100,100,105,114,95,114,0,116,101,108,108,100,105,114,0,115,101,101,107,100,105,114,0,114,101,119,105,110,100,100,105,114,0,99,108,111,115,101,100,105,114,0,100,105,114,102,100,0,103,101,116,112,114,111,103,110,97,109,101,0,102,111,112,101,110,0,102,114,101,97,100,0,102,119,114,105,116,101,0,102,115,101,101,107,0,102,116,101,108,108,0,102,99,108,111,115,101,0,102,112,114,105,110,116,102,0,108,105,98,107,101,114,110,101,108,95,119,101,98,46,115,112,114,120,0,108,105,98,107,101,114,110,101,108,95,115,121,115,46,115,112,114,120,0,95,95,115,116,97,99,107,95,99,104,107,95,103,117,97,114,100,0,95,95,115,116,97,99,107,95,99,104,107,95,102,97,105,108,0,95,95,101,114,114,111,114,0,115,99,101,75,101,114,110,101,108,69,114,114,111,114,0,115,99,101,75,101,114,110,101,108,76,111,97,100,83,116,97,114,116,77,111,100,117,108,101,0,115,99,101,75,101,114,110,101,108,65,108,108,111,99,97,116,101,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,77,97,112,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,71,101,116,68,105,114,101,99,116,77,101,109,111,114,121,83,105,122,101,0,115,99,101,75,101,114,110,101,108,83,116,97,116,0,115,99,101,75,101,114,110,101,108,79,112,101,110,0,115,99,101,75,101,114,110,101,108,82,101,97,100,0,115,99,101,75,101,114,110,101,108,76,115,101,101,107,0,115,99,101,75,101,114,110,101,108,67,108,111,115,101,0,115,99,101,75,101,114,110,101,108,83,108,101,101,112,0,115,99,101,75,101,114,110,101,108,85,115,108,101,101,112,0,115,99,101,75,101,114,110,101,108,71,101,116,116,105,109,101,111,102,100,97,121,0,115,99,101,75,101,114,110,101,108,71,101,116,80,114,111,99,101,115,115,84,105,109,101,0,115,99,101,75,101,114,110,101,108,71,101,116,67,117,114,114,101,110,116,67,112,117,0,115,121,115,99,116,108,0,115,121,115,99,116,108,98,121,110,97,109,101,0,115,121,115,97,114,99,104,0,101,120,101,99,118,101,0,112,116,104,114,101,97,100,95,115,101,108,102,0,112,116,104,114,101,97,100,95,115,101,116,97,102,102,105,110,105,116,121,95,110,112,0,115,99,101,75,101,114,110,101,108,67,114,101,97,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,68,101,108,101,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,65,100,100,85,115,101,114,69,118,101,110,116,0,115,99,101,75,101,114,110,101,108,65,100,100,82,101,97,100,69,118,101,110,116,0,103,101,116,117,105,100,0,103,101,116,103,105,100,0,103,101,116,112,105,100,0,115,101,116,117,105,100,0,115,101,116,103,105,100,0,115,101,116,114,101,117,105,100,0,115,101,116,114,101,103,105,100,0,115,99,101,75,101,114,110,101,108,71,101,116,70,115,83,97,110,100,98,111,120,82,97,110,100,111,109,87,111,114,100,0,115,99,101,75,101,114,110,101,108,71,101,116,83,121,115,116,101,109,83,119,86,101,114,115,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,temp];


window.mira_blob_2_len = 0x1969;
window.mira_blob_2 = malloc(window.mira_blob_2_len);
write_mem(window.mira_blob_2, payload);