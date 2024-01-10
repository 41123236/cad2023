var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': '作業區', 'text': '', 'tags': '', 'url': '作業區.html'}, {'title': '組合圖', 'text': '\n 零件圖   \n', 'tags': '', 'url': '組合圖.html'}, {'title': 'Brython', 'text': '\n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W9-W11', 'text': '\n 下載整合網路設定、可攜程式系統以及執行可攜 Solid Edge 的 reg 與 batch files.7z \xa0 (需要密碼) \n 請各分組實際操作 \xa0 https://mde.tw/pjcopsim/content/bubbleRobTutorial.html \xa0 之後, 將操作過程與心得放入各組的分組網站中 (頁面標題為 w11), 並說明各組員在過程中所負責的工作內容與任務, 各組員所負責的項目請放入個人的網頁中. \n 過程中所遭遇問題, 請各組員利用 Teams 詢問 (CAD2023 MS Teams 代碼為: fnueb56). \n 執行 perpetual motion simulator 系統: \n 紀錄鋼球運動速度: \xa0 1 , \xa0 2 . \n 對模擬物件施力: \xa0 1 \xa0 (non-central), \xa0 2 \xa0 (center of mass), \xa0 3 \xa0 (施力並設定材料性質). \n 模擬電磁力: \xa0 1 , \xa0 2 . \n CoppeliaSim 鋼球永動模擬器電腦輔助設計三個階段: 建立模型零組件 - 轉入機電模擬系統 - 根據實際物理條件設置機電系統.\xa0 perpetual_motion_simulator_project_cad2023.7z 下載 \xa0 (需要密碼) \n 雲端、區網與近端環境中的電腦輔助設計環境: \n 直接在網路上進行電腦輔助設計的好處雖然很多, 但是在 商用的雲端系統 , 例如: Github 或 Replit, 使用者只能依照服務提供者的方法及流程進行應用, 當 Github 宣布在 2023 年底之前各用戶必須使用 2FA 認證登入, 使用者只能照辦, 否則帳號就可能被禁用. \n 作為 Replit 的免付費用戶也處於相同的情況, 當服務提供者宣布在 2024 年初開始, 只有付費用戶可以使用廣域的 Webview, 若希望仍維持免付費使用 (目前 \xa0 Replit Core 年費 \xa0 120 美元), 屆時再看是否能繼續開啟動態網站編輯, 並將改版內容提交推送到 Github 倉儲, 以便採分散式版次管理流程維護 Github Pages 網站. \n 同樣利用網路服務, 但設法將所有超過兩百名用戶集中到 自行搭建的廣域網站 系統, 也可以擁有類似 Replit 上維護網站內容的優點, 可是壞處是在系上工作站室所設定的軟硬體與網路連線, 都必須自行維護, 可用性與穩定度都遠遠不及商用的雲端系統. \n 另外, 在無網路連線的情況下, 若先前已經將 Github 上倉儲, git clone 到 近端硬碟或隨身碟 , 使用者仍可以直接利用可攜程式系統, 執行動態網站並針對電腦輔助流程新增提交改版內容, 等到有網路連線的時段再將資料推送到 Github. \n 最後, 假如系上的連外網路無法順利與 Github 相連, 所有電腦輔助設計與協同都必須在區網進行, 則可以使用 \xa0 Fossil SCM \xa0 進行各學員的分散式版次管理. (請參考 這裡 的說明). \n 循著上述相同的網路或自主環境, 利用 \xa0 Onshape \xa0 就與商用雲端系統相似, 一定要上網才能進行輔助設計繪圖, 而在系上或學校網路認證才能開啟的 \xa0 NX 或 SolidWorks , 就必須在自行搭建的認證主機能夠運作, 才可連線認證後開啟. 至於 \xa0 Solid Edge 可攜版與 Solvespace \xa0 則可以在沒有網路連線的情況下進行零組件的設計繪圖. \n \n w10 網路狀態: 目前似乎從學校電腦無法使用 hinet 的 IPv6 DNS 伺服器. 驗證方式: 在命令列中輸入 nslookup, 然後以 server 2001:b000:168::1 指令將 DNS 設為中華電信的符號名稱伺服器, 然後查詢 google.com. \n 因應方法: 使用機械設計系所建立的 DNS 伺服器, 140.130.17.3 以及 \xa0 2001:288:6004:17::3 \n 無法使用中華電信 DNS 原因: 應該是學校網管修改設定, 禁止跨區設定 DNS 伺服器. \n w10 Ubuntu 問題: 22.04 版更為最新後, netplan 在無 openvswitch 啟動的情況下無法更新設定. \n 先處理 /etc/netplan/net.yaml 中 DNS 伺服器改為系上主機, 在無法使用 sudo netplan apply 更新 /etc/netplan/net.yaml 設定之前, 可以查詢 /etc/environment 中是否使用 IPv6 address 進行設定 http_proxy 與 https_proxy 變數. 或者修改 /etc/resolv.conf 中的 nameserver 設定, 讓 net.yaml 中的 DNS 設定可以運作. 且利用 \xa0 sudo apt install openvswitch-switch \xa0 安裝並執行 netplan 所需的服務 (其實是 bug, 但為了能讓 netplan 正常運作的權宜之策). \n 有關電腦輔助設計室網路設定: \n w10_2b_cadlab_network_setting.7z \xa0 (需要下載密碼) - 電腦輔助設計室網路設定批次與 Powershell 檔案. \n tinyc.7z \xa0 (需要下載密碼) - 使用 Tiny C Compiler 編譯 C 程式, 包含 gd 與 gnuplot. \n python3114_git_putty.7z \xa0 (需要下載密碼) - 將近端 cmsimde 啟動並改版後推向 Github 所需的檔案. \n 若電腦輔助設計室網路不順, 可以先將倉儲 clone 到隨身碟, 並利用近端工具進行輔助設計且改版後 (git add and git commit), 等到網路順暢時才 push. \n \n creo 10 安裝流程的 wink 專案檔案下載 \xa0 (需要密碼) \n 有關線上簡報、網誌與多媒體影片製作工具, 請參考: \xa0 https://mde.tw/cpnote/content/w10.html \n 有關學習計算機程式與電腦輔助設計相關課程的心態與方法, 請參考 這裡 的說明. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n 有關口頭報告 (oral presentation): \n PowerPoint vs reveal.js: Choosing Presentation Tools (softwarekeep.com) \xa0 \n https://ithelp.ithome.com.tw/articles/10185467 \xa0 \n cad2023 倉儲中的 reveal.js:\xa0 https://mde.tw/cadnote/reveal/ \xa0 \n 有關永動機運動模擬玩具 (perpetual motion simulator toy): \n CAD 零組件繪圖 \n 原型製作前的系統模擬與製程規劃 \n 如何學習 CoppeliaSim: \n 透過閱讀\xa0 https://mde.tw/pjcopsim \xa0中的 tutorial 與相關指令說明後, 實際操作測試並在個人網頁中記錄各項功能的使用方法. \n 進入 CoppeliaSim \xa0 Forum , 搜尋相關討論或發問. \n Arduino code to CoppeliaSim \xa0 展示. ( Horosim , \xa0 備份 ), 更早的 討論 . 虛實整合: \xa0 1 , \xa0 2 , \xa0 3 . \n 從既有討論串中學習: \xa0 1 , \n 了解與磁場模擬有關的研究: \xa0 1 \xa0 (需要下載密碼), \xa0 2 , \xa0 3 . \n 從 案例 中學習. \n 有關鋼球平衡台 (steel ball balancing platform): \n 有關虛實整合彈珠台 (cyber-physical pinball table): \n \n w8 << \xa0 Previous \xa0 Next \xa0 >> wink \n \n \n Copyright ©2024 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n', 'tags': '', 'url': 'W9-W11.html'}]};