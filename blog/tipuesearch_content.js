var tipuesearch = {"pages":[{"text":"2017Spring 機械設計工程系-協同產品設計實習課程 40423245學員 個人課程倉儲: https://github.com/40423211/2017springcd_hw 個人課程投影片: https://40423211.github.io/2017springcd_hw/ 個人課程網誌: https://40423211.github.io/2017springcd_hw/blog/","url":"./pages/about/","title":"About","tags":"misc"},{"text":"期中協同查驗與自評 (二) 四連桿機構利用Trace Point繪製頂點路徑 (1)利用solvespace進行點路徑的分析 (2)用Excel進行點的分析 (3)利用程式繪製路徑 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/40423211.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./2017spring-cd W9.html","title":"Week9   20170419","tags":"Course"},{"text":"本周作業 一.把Onshape繪製四連桿機構在v-rep中開啟，並使他作動。 首先要繪製出四連桿機構所需要的零件 在開啟組合圖將他們組合起來 在開啟V-rep把組合完的四連桿機構置入，並使他作動。 心得:經過上禮拜的練習已經熟練如何使用onshape繪製零件並組合起來，還有V-rep的作動，這禮拜的功課除了新使用的Dunny，其餘大致上來講已經沒有什麼難度了，相信在之後的作業也能越來越順利。","url":"./2017spring-cd W6.html","title":"Week6   20170329","tags":"Course"},{"text":"本周作業 一.把Onshape繪製單連桿機構在v-rep中開啟，並使他作動。 使用V-rep裡的Import/Mash將已經畫完的單連桿機構開啟 用object/item shift稍微調整X或Y軸 以免等等叫出的馬達卡在機構中(記得單位是公尺) 在旁邊白色地方處點滑鼠右鍵，點選add>Joint>Revolute將馬達開啟 在旁邊的馬達圖案點選兩下 點選在右邊的Length和Diameter修改成自己需要的尺寸 點選左上角Edit>Grouping/Merging>Divide selected shapes 將單連桿機構分成三個零件 再來要將馬達移位至傳動軸的位置 先點選在馬達 在按Ctrl點選傳動軸 再點選Object/Item裡的Apply to selection 之後馬達就會移位至傳動軸的位置 將傳動軸的零件抑制 並將上面的零件改成從動件 再來只要輸入自己所要的轉速就可以移動了 影片 心得:第一次要將v-rep裡的單連桿機構作動耗費了我許多時間，但是在多次的操作下已經越來越清楚連桿機構作動的原理，在下次有關於v-rep的作業應該可以更快速地完成。","url":"./2017spring-cd W5.html","title":"Week5   20170321","tags":"Course"},{"text":"本週作業 一.在Onshape繪製單連桿機構 二.在SolveSpace繪製單連桿機構 一. 繪製出所需零件 ，底座、軸及單連桿 並將其組立起來 影片 二. 繪製出所需零件 ，底座、軸及單連桿 並將其組立起來 影片 心得 兩個繪圖軟體的鍵盤指令都不相同，在使用過程中很容易就搞混了，希望可以經過多次練習來習慣使用他們。","url":"./2017spring-cd W4.html","title":"Week4   20170314","tags":"Course"},{"text":"本週作業 一.使用Onshape3D繪圖軟體30-50-60cm比例之四連桿機構,並以V-rep開啟 二.使用solvespace學會畫出頂點的運動軌跡。 一. 首先將各尺寸的連桿實體畫出 再開啟組合圖 利用點與點的重合、線的共線及點與面的重合，限制桿子的作動 並匯出成STL檔 再使用V-rep裡的ImportMash開啟 影片 二. 先畫出30-50-60-60的四連桿草圖 並在50桿子上畫出一正三角形 點選正三角形的頂點 並利用Analyze裡的Trace point繪製出頂點的運動軌跡 可以在Excel中看到頂點運動軌跡的坐標 影片 心得:在多次練習下，已經會熟練地使用onshape裡面的鍵盤指令，相信在之後有關於onshape作業可以更有效率地完成。","url":"./2017spring-cd W3.html","title":"Week3   20170307","tags":"Course"},{"text":"本週作業 一.利用python找出缺課人員 二.在SolveSpace畫出四連桿機構 一. 可以下載我們的課程範例中開啟w2b_cadlab看到有在上課填坐位表的修課學生 啟w2b_cadlab可以看到有修這一門課的學生 然後可以利用w2b_cadlab這裡面的程式碼來確認修課學生的缺曠課 二. 先畫出30-50-60-60四連桿基本的尺寸 再50跟30之間畫出一條隨意尺寸的線延伸到外面 方便等一下四連桿的做動 再開起課程範例裡的連桿 利用點與點的重合、線的共線及點與面的重合，限制桿子的作動 組合完之後將四連桿機構儲存成STL檔 再使用V-rep裡的Import/Mash開啟 開啟時四連桿機構會鑲進地面 可以用object/item shift調整z軸高度(記得單位是公尺) 影片 心得:利用python找出缺課人員再上有使用電腦的課程來進行點名的話似乎比雲端點名系統還要方便。 使用SolveSpace畫出四連桿機構也算是複習上學期所使用的東西，希望在將來的課程中可以進階的使用到SolveSpace這個軟體。","url":"./2017spring-cd W2.html","title":"Week2   20170228","tags":"Course"},{"text":"本週作業 一.解決在開啟start時發生的錯誤 發生錯誤的原因: Stunnel資料夾裡的Config/Styunnel.conf裡的IP和電腦的IP不同 可以使用cmd裡使用ipconfig/all的指令找到電腦的IP位置 並將其複製貼到Styunnel.conf裡 影片 心得:以前要找到自己電腦的IP位置都要從控制台裡的無線網路連線尋找 現在只要在cmd裡打上ipconfig/all這個指令就會出現了 真是方便","url":"./2017spring-cd W1.html","title":"Week1  20170221","tags":"Course"}]};