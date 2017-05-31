var tipuesearch = {"pages":[{"text":"2017Spring 機械設計工程系-協同產品設計實習課程 40423245學員 個人課程倉儲: https://github.com/40423211/2017springcd_hw 個人課程投影片: https://40423211.github.io/2017springcd_hw/ 個人課程網誌: https://40423211.github.io/2017springcd_hw/blog/","url":"./pages/about/","tags":"misc","title":"About"},{"text":"一.繪製一個半徑為 250 畫素, 壓力角 20, 齒數為 36 齒的漸開線正齒輪輪廓 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.41666*(canvas.height/2) # 齒數 n = 36 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\")","url":"./2017spring-cd W15.html","tags":"Course","title":"協同產品設計實習第十五週練習"},{"text":"一.四連桿機構協同 Trace Point 查驗 二.繪製連桿機構並使他作動 一. (1)利用solvespace進行點路徑的分析 (2)用Excel進行點的分析 (3)利用程式繪製路徑 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"../data/40423211.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 影片 二. (1)多連桿機構零件繪製 影片 (2)多連桿機構零件組合 影片 (3)多連桿機構零件作動 影片","url":"./2017spring-cd W10.html","tags":"Course","title":"期中協同查驗與自評"},{"text":"本周作業 一.小組評分與個人評分 小組互評: https://pygroup-ag100.rhcloud.com 個人自評: http://mde1a2.kmol.info:8000/k96tgzh1ofbl","url":"./2017spring-cd W8.html","tags":"Course","title":"Week8   20170412"},{"text":"本周作業 一.把Onshape繪製八連桿機構在v-rep中開啟，並使他作動。","url":"./2017spring-cd W7.html","tags":"Course","title":"Week7   20170405"},{"text":"本周作業 一.把Onshape繪製四連桿機構在v-rep中開啟，並使他作動。 首先要繪製出四連桿機構所需要的零件 在開啟組合圖將他們組合起來 在開啟V-rep把組合完的四連桿機構置入，並使他作動。 心得:經過上禮拜的練習已經熟練如何使用onshape繪製零件並組合起來，還有V-rep的作動，這禮拜的功課除了新使用的Dunny，其餘大致上來講已經沒有什麼難度了，相信在之後的作業也能越來越順利。","url":"./2017spring-cd W6.html","tags":"Course","title":"Week6   20170329"},{"text":"本周作業 一.把Onshape繪製單連桿機構在v-rep中開啟，並使他作動。 使用V-rep裡的Import/Mash將已經畫完的單連桿機構開啟 用object/item shift稍微調整X或Y軸 以免等等叫出的馬達卡在機構中(記得單位是公尺) 在旁邊白色地方處點滑鼠右鍵，點選add>Joint>Revolute將馬達開啟 在旁邊的馬達圖案點選兩下 點選在右邊的Length和Diameter修改成自己需要的尺寸 點選左上角Edit>Grouping/Merging>Divide selected shapes 將單連桿機構分成三個零件 再來要將馬達移位至傳動軸的位置 先點選在馬達 在按Ctrl點選傳動軸 再點選Object/Item裡的Apply to selection 之後馬達就會移位至傳動軸的位置 將傳動軸的零件抑制 並將上面的零件改成從動件 再來只要輸入自己所要的轉速就可以移動了 影片 心得:第一次要將v-rep裡的單連桿機構作動耗費了我許多時間，但是在多次的操作下已經越來越清楚連桿機構作動的原理，在下次有關於v-rep的作業應該可以更快速地完成。","url":"./2017spring-cd W5.html","tags":"Course","title":"Week5   20170321"},{"text":"本週作業 一.在Onshape繪製單連桿機構 二.在SolveSpace繪製單連桿機構 一. 繪製出所需零件 ，底座、軸及單連桿 並將其組立起來 影片 二. 繪製出所需零件 ，底座、軸及單連桿 並將其組立起來 影片 心得 兩個繪圖軟體的鍵盤指令都不相同，在使用過程中很容易就搞混了，希望可以經過多次練習來習慣使用他們。","url":"./2017spring-cd W4.html","tags":"Course","title":"Week4   20170314"},{"text":"本週作業 一.使用Onshape3D繪圖軟體30-50-60cm比例之四連桿機構,並以V-rep開啟 二.使用solvespace學會畫出頂點的運動軌跡。 一. 首先將各尺寸的連桿實體畫出 再開啟組合圖 利用點與點的重合、線的共線及點與面的重合，限制桿子的作動 並匯出成STL檔 再使用V-rep裡的ImportMash開啟 影片 二. 先畫出30-50-60-60的四連桿草圖 並在50桿子上畫出一正三角形 點選正三角形的頂點 並利用Analyze裡的Trace point繪製出頂點的運動軌跡 可以在Excel中看到頂點運動軌跡的坐標 影片 心得:在多次練習下，已經會熟練地使用onshape裡面的鍵盤指令，相信在之後有關於onshape作業可以更有效率地完成。","url":"./2017spring-cd W3.html","tags":"Course","title":"Week3   20170307"},{"text":"本週作業 一.利用python找出缺課人員 二.在SolveSpace畫出四連桿機構 一. 可以下載我們的課程範例中開啟w2b_cadlab看到有在上課填坐位表的修課學生 啟w2b_cadlab可以看到有修這一門課的學生 然後可以利用w2b_cadlab這裡面的程式碼來確認修課學生的缺曠課 二. 先畫出30-50-60-60四連桿基本的尺寸 再50跟30之間畫出一條隨意尺寸的線延伸到外面 方便等一下四連桿的做動 再開起課程範例裡的連桿 利用點與點的重合、線的共線及點與面的重合，限制桿子的作動 組合完之後將四連桿機構儲存成STL檔 再使用V-rep裡的Import/Mash開啟 開啟時四連桿機構會鑲進地面 可以用object/item shift調整z軸高度(記得單位是公尺) 影片 心得:利用python找出缺課人員再上有使用電腦的課程來進行點名的話似乎比雲端點名系統還要方便。 使用SolveSpace畫出四連桿機構也算是複習上學期所使用的東西，希望在將來的課程中可以進階的使用到SolveSpace這個軟體。","url":"./2017spring-cd W2.html","tags":"Course","title":"Week2   20170228"},{"text":"本週作業 一.解決在開啟start時發生的錯誤 發生錯誤的原因: Stunnel資料夾裡的Config/Styunnel.conf裡的IP和電腦的IP不同 可以使用cmd裡使用ipconfig/all的指令找到電腦的IP位置 並將其複製貼到Styunnel.conf裡 影片 心得:以前要找到自己電腦的IP位置都要從控制台裡的無線網路連線尋找 現在只要在cmd裡打上ipconfig/all這個指令就會出現了 真是方便","url":"./2017spring-cd W1.html","tags":"Course","title":"Week1  20170221"}]};