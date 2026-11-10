(function(){
'use strict';

/* giữ nguyên khóa cũ để tiến độ đã đánh dấu không bị mất */
var STORE = 'cp-roadmap-v2';

/* ============================================================
   DỮ LIỆU LỘ TRÌNH
   [ số, tên, mô tả, [ [tên nhóm, [ [tên mục, mô tả, mức độ] ] ] ] ]
   ============================================================ */
var ROADMAP = [
['01','Nhập môn & công cụ','Môi trường, C++, STL và độ phức tạp — nền tảng bắt buộc.',[
  ['Môi trường & quy trình',[
    ['Cài đặt trình biên dịch & IDE','g++ (MinGW/MSYS2) hoặc VS Code + extension C/C++; chạy được bài đầu tiên với -std=c++17.','core'],
    ['Template cá nhân','Fast I/O, typedef long long ll, hằng số MOD, macro debug, khung nộp bài dùng lại.','core'],
    ['Cờ biên dịch & tối ưu','-O2, -Wall, -Wextra, -fsanitize=address/undefined; phân biệt bản debug và release.','core'],
    ['Đọc ghi file & freopen','freopen, ifstream/ofstream; nộp bài đúng chuẩn file của từng judge.','core'],
    ['So khớp output & script test','So sánh đáp án, bỏ khoảng trắng cuối dòng, chạy tự động nhiều test.','core'],
    ['Debugger & breakpoint','Watch, step, call stack; đọc giá trị biến tại chỗ thay vì đoán.','mid'],
    ['Assert & kiểm tra bất biến','assert chỉ số, kiểm tra điều kiện khi phát triển, tắt trước khi nộp.','mid'],
    ['Stress test & thu nhỏ phản ví dụ','Sinh test ngẫu nhiên nhỏ, chạy brute force đối chiếu, rút gọn input lỗi.','mid'],
    ['Đo thời gian & bộ nhớ','chrono, ước lượng với 1–2 giây và 256 MB; thói quen tối ưu hằng số.','mid'],
    ['Git & lưu trữ lời giải','Commit theo bài, thư mục theo contest, ghi chú ý tưởng và lỗi đã mắc.','core']
  ]],
  ['Cú pháp & kiểu dữ liệu',[
    ['Kiểu số nguyên & phạm vi','int 32-bit, long long 64-bit, unsigned, char, size_t; chọn theo giới hạn đề.','core'],
    ['Tràn số & ép kiểu','2^31−1, 2^63−1, (long long)a*b, __int128, trộn có dấu và không dấu.','core'],
    ['Số thực & sai số','double, epsilon, so sánh bằng, tránh tích lũy sai số, ưu tiên tọa độ nguyên.','core'],
    ['Toán tử, độ ưu tiên, bitwise','Số học, so sánh, logic, dịch bit; short-circuit và lỗi ngầm do ưu tiên.','core'],
    ['Điều khiển luồng','if/else, switch, for/while, break/continue; viết vòng lặp rõ biên.','core'],
    ['Hàm, tham chiếu, lambda','Truyền trị/truyền chiếu, inline, overload, đệ quy và trường hợp dừng.','core'],
    ['Mảng, chuỗi C & std::string','char[], getline, stringstream; xử lý khoảng trắng và ký tự kết thúc.','core'],
    ['Con trỏ & cấp phát động','&, *, new/delete, mảng động; tránh rò rỉ, con trỏ treo, truy cập ngoài biên.','mid'],
    ['struct, pair, tuple & toán tử','Đóng gói, operator<, tie, structured binding; dùng làm node cấu trúc dữ liệu.','core'],
    ['Hằng số, enum & tổ chức code','const, constexpr, #define an toàn; tách hàm, hạn chế biến toàn cục.','core']
  ]],
  ['STL thiết yếu',[
    ['vector & array','push_back, reserve, resize, vector 2 chiều; chi phí amortized O(1).','core'],
    ['set & multiset','Cây đỏ–đen, lower_bound/upper_bound, xóa theo iterator, comparator tùy biến.','core'],
    ['map & multimap','Khóa–giá trị, [] vs at vs find, duyệt theo thứ tự khóa.','core'],
    ['unordered_map & unordered_set','Bảng băm, reserve, load factor; nguy cơ bị hack bằng test xấu.','mid'],
    ['stack, queue, deque','LIFO/FIFO, thao tác hai đầu; nền cho BFS và cửa sổ trượt.','core'],
    ['priority_queue','Max-heap mặc định, min-heap, comparator tùy biến, lazy deletion.','core'],
    ['bitset & thao tác bit song song','count/test/set/shift, tăng tốc gấp 64 lần cho DP và tập hợp.','mid'],
    ['<algorithm>','sort, stable_sort, lower_bound, unique, reverse, next_permutation, accumulate.','core'],
    ['Iterator & range-for','begin/end, auto, iterator bị vô hiệu hóa sau erase, erase–remove idiom.','mid'],
    ['Policy-based data structure','__gnu_pbds::tree với order_of_key và find_by_order.','high']
  ]],
  ['Độ phức tạp & tối ưu',[
    ['Big-O & các lớp','O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!); ý nghĩa thực tế.','core'],
    ['Phân tích vòng lặp & đệ quy','Đếm phép toán, phương trình truy hồi, master theorem ở mức đủ dùng.','core'],
    ['Chọn thuật theo giới hạn n','n ≤ 20 → 2ⁿ/n!, n ≤ 500 → n³, n ≤ 5000 → n², n ≤ 2·10⁵ → n log n.','core'],
    ['Amortized & hằng số','vector, DSU, hash map; cache locality, tránh copy và cấp phát thừa.','mid'],
    ['Bộ nhớ, stack & MLE','Ước lượng byte, mảng 2D lớn, đệ quy sâu gây tràn stack.','mid'],
    ['Tối ưu I/O & hằng số','ios::sync_with_stdio, cin.tie, đọc bằng buffer, giảm modulo và nhánh.','mid']
  ]]
]],
['02','Cấu trúc dữ liệu & truy vấn khoảng','Tiền tố, hai con trỏ, băm, heap, DSU, Fenwick, segment tree.',[
  ['Mảng & tổng tiền tố',[
    ['Prefix sum 1D','Tổng đoạn [l, r] trong O(1); dựng mảng cộng dồn từ mảng gốc.','core'],
    ['Prefix sum 2D','Tổng hình chữ nhật bằng bao hàm–loại trừ, xử lý biên cẩn thận.','mid'],
    ['Difference array 1D','Cập nhật đoạn trong O(1), dựng lại mảng sau cùng.','mid'],
    ['Difference array 2D','Cập nhật hình chữ nhật O(1), bài toán tô màu lưới.','high'],
    ['Prefix XOR & đếm','Đếm đoạn con có XOR bằng K, tổng chẵn/lẻ.','mid'],
    ['Kadane & biến thể','Tổng đoạn con lớn nhất, cho phép rỗng, in ra đoạn tối ưu.','core'],
    ['Đếm đoạn con bằng map','Tổng bằng K, chia hết cho K; kết hợp prefix với tần suất.','mid'],
    ['Nén tọa độ','Đưa giá trị lớn về hạng nhỏ, giữ thứ tự, xử lý phần tử trùng.','mid'],
    ['Tiền tố trên cây','Tổng đường đi gốc–đỉnh, truy vấn tổng cây con.','mid']
  ]],
  ['Hai con trỏ & cửa sổ trượt',[
    ['Two pointers trên mảng sắp','Đếm cặp, tam giác, hợp nhất hai dãy; điều kiện dịch con trỏ.','core'],
    ['Đếm cặp & tổng ba số','Two pointers + sắp xếp, tránh đếm trùng.','core'],
    ['Sliding window cố định','Tổng/max/min trên đoạn dài k, cập nhật tăng dần.','core'],
    ['Sliding window động','Mở rộng/thu hẹp theo điều kiện, đếm đoạn con thỏa mãn.','mid'],
    ['Cửa sổ với deque','Min/max trong cửa sổ trượt, tối ưu DP bằng deque.','mid'],
    ['Đếm đoạn con thỏa điều kiện','Số đoạn có tổng ≤ S, đếm theo biên phải.','mid'],
    ['Hai con trỏ trên nhiều mảng','Ghép cặp, hợp nhất, bài toán hai dãy đã sắp.','mid']
  ]],
  ['Sắp xếp & thứ tự',[
    ['Sắp xếp cơ bản','Selection, insertion, bubble: cơ chế, độ phức tạp, tính ổn định.','core'],
    ['Merge sort & nghịch thế','Chia để trị, hợp nhất hai mảng, đếm số nghịch thế.','core'],
    ['Quick sort & quickselect','Chọn pivot, phân hoạch, trung vị, trường hợp xấu O(n²).','mid'],
    ['Heap sort & counting sort','Sắp xếp tại chỗ O(n log n) và O(n + k) khi miền giá trị nhỏ.','mid'],
    ['Radix & bucket sort','Sắp xếp theo chữ số LSD/MSD, độ phức tạp O(d·n).','high'],
    ['Comparator nâng cao','Nhiều tiêu chí, tie-break, tránh comparator không chặt.','core'],
    ['Sắp xếp theo hoán vị','Sắp mảng chỉ bằng phép hoán đổi, đếm chu trình.','high'],
    ['next_permutation & từ điển','Sinh hoán vị kế tiếp, thứ tự từ điển, sinh tổ hợp.','core'],
    ['Ứng dụng sắp xếp','Interval scheduling, phủ đoạn, chọn họp, bài toán lịch.','core']
  ]],
  ['Ngăn xếp, hàng đợi, deque',[
    ['Stack & kiểm tra ngoặc','LIFO, ngoặc hợp lệ, lồng nhau, đếm độ sâu.','core'],
    ['Biểu thức trung tố & hậu tố','Chuyển đổi, đánh giá biểu thức, ưu tiên toán tử.','mid'],
    ['Monotonic stack','Next greater/smaller, số đoạn có min/max là a[i].','mid'],
    ['Histogram lớn nhất','Diện tích hình chữ nhật lớn nhất, biến thể trên lưới.','mid'],
    ['Tổng min/max mọi đoạn con','Đóng góp từng phần tử bằng monotonic stack.','high'],
    ['Queue & BFS nền tảng','FIFO, hàng đợi vòng, duyệt theo lớp.','core'],
    ['Deque & cửa sổ trượt','Min/max cửa sổ, tối ưu DP, 0-1 BFS.','mid'],
    ['Ứng dụng nâng cao','Cartesian tree, bài toán nước, xóa phần tử lớn nhất.','high']
  ]],
  ['Băm (hashing)',[
    ['Bảng băm & va chạm','Hàm băm, load factor, reserve; độ phức tạp kỳ vọng O(1).','core'],
    ['Rolling hash chuỗi','Hash tiền tố, so khớp xâu con O(1), base và modulus.','mid'],
    ['Double hash & chống hack','Hai modulus, base ngẫu nhiên, tránh test làm sụp bảng băm.','high'],
    ['Hash cấu trúc','Hash vector/tập hợp, đếm cặp, nhóm theo dấu hiệu.','mid'],
    ['Hash + nhị phân','Tìm LCP, so sánh xâu con, palindrome bằng hash.','mid'],
    ['Đếm xâu con phân biệt','Hash + set, đếm xâu con khác nhau độ dài k.','high'],
    ['Ứng dụng hash','So khớp mẫu, đếm cặp xâu, kiểm tra đẳng cấu.','mid']
  ]],
  ['Heap & hàng đợi ưu tiên',[
    ['Binary heap tự cài','Mảng, sift up/down, build heap O(n), thao tác O(log n).','mid'],
    ['Ứng dụng heap','Dijkstra, trung vị động, chọn phần tử nhỏ thứ k.','mid'],
    ['Merge k dãy & Huffman','Hợp nhất k mảng sắp, chi phí nhỏ nhất, mã Huffman.','mid'],
    ['Lazy deletion','Đánh dấu phần tử đã xóa, heap có cập nhật khóa.','high'],
    ['Heap nhiều khóa','Comparator phức tạp, hai heap cân bằng, bài toán trung vị.','mid'],
    ['Bài toán lịch & deadline','Chọn việc theo lợi nhuận, greedy + heap.','mid']
  ]],
  ['Cây cân bằng & PBDS',[
    ['BST & duyệt cây','Chèn/xóa/tìm, duyệt giữa, cây suy biến thành dãy.','mid'],
    ['Treap split/merge','Cây cân bằng ngẫu nhiên, tách/gộp theo khóa.','high'],
    ['Implicit treap','Mảng động: chèn, xóa, đảo đoạn, truy vấn đoạn.','expert'],
    ['Splay tree','Xoay đưa lên gốc, nền cho link-cut (giới thiệu).','expert'],
    ['Ordered set (PBDS)','order_of_key, find_by_order; tìm thứ k và đếm phần tử nhỏ hơn.','high']
  ]],
  ['DSU (Union-Find)',[
    ['DSU cơ bản','parent, union by size/rank, path compression; gần O(1) amortized.','core'],
    ['Ứng dụng DSU','Đếm thành phần liên thông, phát hiện chu trình, Kruskal.','core'],
    ['DSU có trọng số','Quan hệ chênh lệch, bài toán đối kháng, potential.','high'],
    ['DSU 2n & parity','Bài toán hai phe, kiểm tra mâu thuẫn, đồ thị hai phía.','high'],
    ['Rollback DSU','Không nén đường, lưu lịch sử, hoàn tác trong chia để trị.','expert'],
    ['Small-to-large','Gộp tập nhỏ vào tập lớn, đếm màu trong cây con.','high'],
    ['DSU on tree (Sack)','Giữ dữ liệu cây con nặng, trả lời truy vấn trong O(n log n).','expert']
  ]],
  ['Fenwick & Segment tree',[
    ['Fenwick tree 1D','Point update, prefix query, đếm nghịch thế.','mid'],
    ['Fenwick 2D','Cập nhật điểm, truy vấn hình chữ nhật.','high'],
    ['Fenwick nâng cao','Fenwick trên mảng hiệu, range update/range query, chọn nhị phân.','high'],
    ['Segment tree cơ bản','Build, update, query; node merge tùy biến theo bài toán.','mid'],
    ['Segment tree node tùy biến','Max subarray, đếm, gcd, ma trận; merge có tính kết hợp.','high'],
    ['Lazy propagation','Cập nhật đoạn với phép cộng/gán, query tổng/max.','high'],
    ['Lazy nâng cao','Phép affine, gán + cộng, nhiều loại cập nhật, đẩy lazy đúng thứ tự.','expert'],
    ['Merge sort tree','Đếm số phần tử ≤ x trên đoạn, truy vấn offline.','high'],
    ['Persistent segment tree','Truy vấn theo phiên bản, k-th trên đoạn, đếm giá trị khác nhau.','expert'],
    ['Segment tree beats','Chmin/chmax trên đoạn, tổng và max (giới thiệu).','expert'],
    ['Segment tree 2D & động','Nén tọa độ, node động, bài toán điểm–hình chữ nhật.','expert']
  ]],
  ['Sparse table, chia căn & offline',[
    ['Sparse table','RMQ tĩnh O(1), xây dựng O(n log n).','mid'],
    ['Sparse table 2D','RMQ trên lưới, bài toán hình chữ nhật.','high'],
    ['Sqrt decomposition','Chia khối, cập nhật/truy vấn, độ phức tạp O(√n).','high'],
    ['Sqrt trên truy vấn','Time blocking, tách truy vấn nặng/nhẹ.','expert'],
    ['Mo algorithm','Sắp xếp truy vấn offline, add/remove O(1), tổng O((n+q)√n).','high'],
    ['Mo với cập nhật','Thêm chiều thời gian, block cỡ O(n^(2/3)).','expert'],
    ['Wavelet tree & matrix','Đếm và tìm k-th theo giá trị trên đoạn (giới thiệu).','expert']
  ]],
  ['Cấu trúc dữ liệu khác',[
    ['Danh sách liên kết','Mảng mô phỏng next/prev, chèn xóa O(1), bài toán Josephus.','mid'],
    ['Sparse set','Tập số nguyên trong [0, n) với add/remove/clear O(1).','high'],
    ['Hash table tự cài','Open addressing, linear probing, double hashing, tránh bị hack.','mid'],
    ['Disjoint sparse table','RMQ tĩnh không giao nhau, trả lời O(1) với bộ nhớ O(n log n).','expert'],
    ['Bitset nâng cao','Biểu diễn tập hợp, giao/hợp/tìm phần tử, DP tăng tốc 64 lần.','high']
  ]]
]],
['03','Kỹ thuật & tư duy giải thuật','Tìm kiếm nhị phân, tham lam, quay lui, chia để trị, offline.',[
  ['Tìm kiếm nhị phân',[
    ['lower_bound & upper_bound','Mảng sắp, vị trí chèn, đếm phần tử, tránh lệch biên.','core'],
    ['Binary search on answer','Tối thiểu hóa cực đại hoặc tối đa hóa cực tiểu, hàm kiểm tra đơn điệu.','mid'],
    ['Nhị phân số thực','Số lần lặp cố định thay epsilon, tránh lặp vô hạn và sai số.','mid'],
    ['Ternary search','Hàm lồi/lõm, tìm cực trị trên đoạn, điều kiện áp dụng.','mid'],
    ['Nhị phân trên hàm ẩn','Ma trận sắp xếp, dãy vô hạn, hàm ẩn; tìm theo chỉ số.','high'],
    ['Parallel binary search','Nhiều truy vấn nhị phân cùng lúc, chia theo mid.','expert'],
    ['Binary lifting','Nhảy 2^k trên dãy/cây, tìm tổ tiên, tìm biên.','high'],
    ['Ứng dụng nhị phân','Chặt gỗ, chia kẹo, tối ưu tham số, bài toán khả thi.','mid']
  ]],
  ['Tham lam (Greedy)',[
    ['Nguyên lý greedy','Chọn tối ưu cục bộ, điều kiện để cục bộ dẫn tới toàn cục.','core'],
    ['Exchange argument','Chứng minh bằng hoán đổi hai phần tử, dựng phản ví dụ khi greedy sai.','high'],
    ['Greedy + sort','Interval scheduling, phủ đoạn, chọn họp nhiều nhất.','core'],
    ['Greedy + heap','Chọn theo deadline, lịch trình có chi phí, ghép cặp tối ưu.','mid'],
    ['Greedy + binary search','Tối thiểu hóa tham số, kiểm tra khả thi bằng tham lam.','mid'],
    ['Greedy vs DP','Nhận diện khi nào tham lam sai, khi nào cần trạng thái.','mid'],
    ['Đổi tiền & chia nhóm','Hệ tiền chuẩn, chia nhóm tối ưu, phản ví dụ kinh điển.','mid']
  ]],
  ['Quay lui & nhánh cận',[
    ['Sinh cấu hình','Hoán vị, tổ hợp, chỉnh hợp, dãy nhị phân; đệ quy có đánh dấu.','core'],
    ['Bài toán kinh điển','N-queens, sudoku, mã đi tuần, chia nhóm; kiểm tra ràng buộc.','mid'],
    ['Cắt tỉa & branch-and-bound','Cận trên/dưới, pruning, sắp nhánh để gặp nghiệm tốt sớm.','high'],
    ['Backtracking + bitmask','Duyệt trạng thái bằng bit, giảm bộ nhớ, kiểm tra O(1).','mid'],
    ['Meet in the middle','Chia đôi tập, sinh 2^(n/2), ghép kết quả, bài toán tập con.','high'],
    ['A* & IDA*','Hàm heuristic, tìm đường, giới thiệu trong trò chơi.','expert']
  ]],
  ['Chia để trị & xử lý offline',[
    ['Divide & conquer cơ bản','Merge sort, đếm nghịch thế, closest pair, tìm phần tử đặc biệt.','core'],
    ['CDQ divide & conquer','Bài toán 3 chiều, đếm điểm, offline với BIT.','expert'],
    ['Sweep line','Quét sự kiện, diện tích hợp, giao đoạn, bài toán lịch.','high'],
    ['Offline queries','Sắp truy vấn theo khóa có lợi, trả lời sau khi xử lý.','mid'],
    ['Small-to-large merging','Gộp tập nhỏ vào lớn, đếm màu trên cây, tổng O(n log n).','high'],
    ['Randomized & heuristic','Shuffle, simulated annealing, local search, tránh test phá.','high'],
    ['Chia để trị trên dãy','Chọn điểm chia, đếm cặp qua mid, bài toán tổng đoạn.','high']
  ]]
]],
['04','Quy hoạch động','Knapsack, LIS, interval, bitmask, tree, digit và tối ưu DP.',[
  ['Nền tảng DP',[
    ['Tư duy trạng thái','Xác định trạng thái, chuyển tiếp, thứ tự tính, base case, đáp án.','core'],
    ['DP 1D','Dãy con, số cách, bước nhảy, tối ưu đơn giản.','core'],
    ['DP 2D','Lưới, đường đi, hai dãy, bảng trạng thái.','core'],
    ['Tối ưu bộ nhớ','Chỉ giữ tầng trước, cuộn mảng, đổi chiều duyệt.','mid'],
    ['Khôi phục nghiệm','Lưu vết chuyển tiếp, in dãy tối ưu, truy hồi ngược.','mid'],
    ['Đếm & modulo','Đếm cấu hình, tránh đếm trùng, xử lý modulo 10⁹+7.','core'],
    ['Kiểm chứng lời giải DP','So với brute force, thử nghiệm nhỏ, tìm trạng thái còn thiếu.','mid']
  ]],
  ['Các dạng DP kinh điển',[
    ['Knapsack 0/1','Chọn/không chọn, mảng 1 chiều duyệt ngược.','core'],
    ['Unbounded knapsack','Chọn không giới hạn, duyệt xuôi, bài toán đổi tiền.','core'],
    ['Bounded knapsack','Số lượng giới hạn, tối ưu bằng nhị phân hoặc deque.','high'],
    ['Knapsack nhóm & nhiều ràng buộc','Chọn đúng một món mỗi nhóm, knapsack hai chiều.','high'],
    ['LIS','O(n²) và O(n log n), đếm số dãy, khôi phục dãy.','mid'],
    ['LCS & biến thể','Xâu con chung dài nhất, in nghiệm, đếm số LCS.','mid'],
    ['Edit distance','Levenshtein, so khớp mờ, chi phí chèn/xóa/thay.','mid'],
    ['DP trên lưới','Đường đi, chướng ngại, tổng lớn nhất, hai lớp.','core'],
    ['DP chia đoạn','Chia dãy thành k đoạn tối ưu, tiền tố + tối ưu.','high'],
    ['Interval DP','Palindrome, nhân ma trận, bung ngoặc; O(n³).','high'],
    ['DP xâu con & palindrome','Đếm palindrome con, xóa để thành palindrome.','high'],
    ['Bitmask DP','TSP, phân nhóm, duyệt tập con; O(2ⁿ·n).','high']
  ]],
  ['DP nâng cao',[
    ['SOS DP','Tổng trên tập con, zeta transform, OR/AND convolution.','expert'],
    ['Digit DP','Đếm số thỏa điều kiện chữ số, trạng thái tight, leading zero.','high'],
    ['DP trên cây','Chọn/không chọn, knapsack trên cây, đếm đường đi.','high'],
    ['Rerooting DP','Tính lại đáp án khi đổi gốc, hai lượt DFS.','expert'],
    ['DP trên DAG','Thứ tự topo, đường đi dài nhất, đếm số đường.','mid'],
    ['DP xác suất & kỳ vọng','Kỳ vọng tuyến tính, trạng thái hấp thụ, hệ phương trình.','high'],
    ['DP với bitset','Tối ưu bằng bitset, tập con, nhân ma trận Bool.','high'],
    ['Profile & broken profile DP','Lấp bàn cờ, domino, trạng thái đường viền.','expert'],
    ['DP trên đồ thị trạng thái','Trạng thái là đỉnh, chuyển tiếp là cạnh, Dijkstra/DP.','high'],
    ['DP đếm cấu trúc','Đếm cây, đếm dãy ngoặc, Catalan qua DP.','high']
  ]],
  ['Tối ưu DP',[
    ['Prefix sum optimization','Chuyển O(n²) về O(n) nhờ mảng cộng dồn.','mid'],
    ['Divide & conquer optimization','Điểm chia đơn điệu, chia để trị trên từng tầng DP.','high'],
    ['Knuth optimization','Bất đẳng thức tứ giác, giảm interval DP xuống O(n²).','expert'],
    ['Convex hull trick','Tối ưu hàm tuyến tính, deque khi độ dốc đơn điệu.','high'],
    ['Li Chao tree','CHT trên đoạn, thêm đường thẳng, truy vấn điểm O(log C).','expert'],
    ['WQS / Aliens trick','Tham số hóa số phần tử, nhị phân lambda, đếm số tối ưu.','expert'],
    ['Matrix exponentiation','Truy hồi tuyến tính, đếm đường đi độ dài k, Fibonacci lớn.','high'],
    ['Slope trick','Tối ưu hàm lồi, hai heap giữ đạo hàm.','expert'],
    ['SMAWK / Monge','Tối ưu chia đoạn với ma trận Monge (giới thiệu).','expert']
  ]]
]],
['05','Đồ thị','Duyệt, đường đi ngắn nhất, MST, SCC, luồng, ghép cặp.',[
  ['Biểu diễn & duyệt đồ thị',[
    ['Biểu diễn đồ thị','Adjacency list/matrix, edge list; chọn theo mật độ cạnh.','core'],
    ['DFS & thời gian vào/ra','Đệ quy hoặc ngăn xếp, tin/tout, cây DFS.','core'],
    ['BFS','Đường đi ngắn nhất không trọng số, duyệt theo lớp.','core'],
    ['Grid BFS/DFS','Bốn/tám hướng, đánh dấu, đếm đảo, mê cung.','core'],
    ['Multi-source BFS','Lan truyền từ nhiều nguồn, khoảng cách gần nguồn nhất.','mid'],
    ['0-1 BFS','Cạnh trọng số 0 hoặc 1, dùng deque thay priority_queue.','mid'],
    ['Thành phần liên thông','Đếm thành phần, tô màu, kiểm tra liên thông.','core'],
    ['Chu trình & hai phía','Phát hiện chu trình vô hướng/hữu hướng, back edge.','core'],
    ['Flood fill & đếm vùng','Đếm đảo, vùng kín, bài toán tô màu lưới.','core']
  ]],
  ['Đường đi ngắn nhất',[
    ['Dijkstra','Hàng đợi ưu tiên, cạnh không âm, O((V+E) log V).','core'],
    ['Dijkstra nhiều trạng thái','Trạng thái (đỉnh, mask/đếm), ràng buộc phụ.','high'],
    ['Bellman-Ford & chu trình âm','Cạnh âm, phát hiện chu trình âm, in chu trình.','mid'],
    ['SPFA','Hàng đợi cải tiến, dễ bị test xấu (dùng thận trọng).','mid'],
    ['Floyd-Warshall','Mọi cặp đỉnh, O(V³), truy vết đường đi.','mid'],
    ['DAG shortest/longest path','Thứ tự topo, đường đi dài nhất, DP trên DAG.','mid'],
    ['Johnson','Chạy Dijkstra cho mọi nguồn khi có cạnh âm.','high'],
    ['K shortest path','A*, biến thể tìm k đường ngắn nhất (giới thiệu).','expert'],
    ['Chu trình ngắn nhất','Chu trình có tổng trọng số nhỏ nhất, BFS/Dijkstra từ mỗi đỉnh.','high'],
    ['Đếm số đường đi','Đếm đường đi trên DAG/lưới, DP hoặc lũy thừa ma trận kề.','mid'],
    ['Ứng dụng đường đi','Lưới có trọng số, đổi tiền, chi phí nhỏ nhất.','mid']
  ]],
  ['Cây khung (MST)',[
    ['Kruskal','Sắp xếp cạnh + DSU, MST, rừng khung.','core'],
    ['Prim','Hàng đợi ưu tiên, đồ thị dày, MST.','mid'],
    ['Boruvka','Mỗi thành phần chọn cạnh rẻ nhất, O(E log V).','high'],
    ['Second-best MST','Bỏ/thêm cạnh, LCA trên MST, bottleneck.','high'],
    ['Bottleneck & minimax path','Đường đi có cạnh lớn nhất nhỏ nhất, tính chất MST.','high'],
    ['Arborescence','Cây khung có hướng, thuật toán Chu-Liu/Edmonds.','expert'],
    ['Ứng dụng MST','Nối mạng, chi phí tối thiểu, clustering, xây đường.','mid']
  ]],
  ['Đồ thị có hướng',[
    ['Topological sort','Kahn và DFS, kiểm tra DAG, thứ tự công việc.','core'],
    ['SCC Tarjan','Low-link, ngăn xếp, gộp thành phần.','high'],
    ['SCC Kosaraju','Hai lượt DFS trên đồ thị đảo, dễ cài đặt.','high'],
    ['Condensation DAG','Co đồ thị thành DAG, DP trên thành phần.','high'],
    ['2-SAT','Mệnh đề (a ∨ b), SCC, gán giá trị, in nghiệm.','expert'],
    ['Cầu & đỉnh khớp','Bridges, articulation points, low-link.','high'],
    ['Biconnected & block-cut tree','Thành phần song liên thông, cây khối.','expert'],
    ['Functional graph','Mỗi đỉnh một cạnh ra, cây gắn chu trình, nhảy bước.','high']
  ]],
  ['Luồng & cắt',[
    ['Max flow & min cut','Mô hình hóa, định lý max-flow min-cut, lát cắt.','high'],
    ['Edmonds-Karp','BFS tìm đường tăng, O(VE²), dễ hiểu.','high'],
    ['Dinic','Level graph, blocking flow, O(V²E).','expert'],
    ['Min-cost max-flow','Chi phí trên cạnh, SPFA/Dijkstra với thế năng.','expert'],
    ['Luồng có cận','Cận dưới/cận trên, tuần hoàn, kỹ thuật khử cận.','expert'],
    ['Mô hình hóa bằng luồng','Phân việc, phủ, cắt ràng buộc, bài toán chọn.','expert']
  ]],
  ['Ghép cặp (Matching)',[
    ['Kuhn','Đường tăng, O(VE), ghép cặp tối đa hai phía.','high'],
    ['Hopcroft-Karp','BFS + DFS theo tầng, O(E√V).','expert'],
    ['Hungarian','Bài toán phân công, chi phí tối thiểu.','expert'],
    ['Matching tổng quát','Blossom, đồ thị không hai phía (giới thiệu).','expert'],
    ['Matching trên lưới','Domino, phủ ô, ghép cặp theo màu bàn cờ.','high']
  ]],
  ['Chuyên đề đồ thị khác',[
    ['Euler path/circuit','Điều kiện tồn tại, thuật toán Hierholzer.','high'],
    ['Hamiltonian','NP-hard, backtracking, bitmask DP cho n nhỏ.','high'],
    ['Tô màu đồ thị','Tham lam, hai phía, ứng dụng bài toán xung đột.','mid'],
    ['Dominator tree','Đỉnh thống trị trong đồ thị có hướng (giới thiệu).','expert'],
    ['Đồ thị phẳng & dual','Bài toán mặt phẳng, dual graph (giới thiệu).','expert'],
    ['Random walk trên đồ thị','Kỳ vọng số bước, xác suất chạm, giải hệ.','expert']
  ]]
]],
['06','Cây & truy vấn trên cây','DFS, đường kính, LCA, HLD, centroid và truy vấn trên cây.',[
  ['Cây cơ bản',[
    ['Biểu diễn cây','parent, children, depth; cây có gốc và không gốc.','core'],
    ['DFS trên cây','subtree size, tin/tout, preorder/postorder.','core'],
    ['Đường kính cây','Hai lần BFS/DFS hoặc DP trên cây.','mid'],
    ['Tâm & trọng tâm','Centroid, tâm đường kính, tư duy chia cây.','high'],
    ['Đếm & khoảng cách trên cây','Đếm đường đi, tổng khoảng cách, bài toán cặp đỉnh.','mid'],
    ['Cây nhị phân','Duyệt, chiều cao, cây tìm kiếm, biểu diễn bằng mảng.','core']
  ]],
  ['LCA & khoảng cách',[
    ['LCA binary lifting','Nhảy 2^k, O(log n) mỗi truy vấn.','high'],
    ['LCA Euler tour + RMQ','Tour Euler, sparse table, O(1) mỗi truy vấn.','high'],
    ['LCA offline Tarjan','DSU + DFS, trả lời nhiều truy vấn offline.','high'],
    ['Khoảng cách & đếm trên đường','dist(u,v), đếm đỉnh/cạnh, truy vấn trên đường đi.','mid']
  ]],
  ['Tree DP',[
    ['Tree DP chọn/không chọn','Bài toán độc lập trên cây, phủ, matching trên cây.','high'],
    ['Knapsack trên cây','Kích thước cây con, chọn k đỉnh, gộp con.','high'],
    ['Rerooting DP','Đổi gốc, tổng khoảng cách, đếm đường qua đỉnh.','expert'],
    ['Đếm đường đi qua đỉnh','Kết hợp các cây con, trừ trùng, tâm đường đi.','high'],
    ['DP + small-to-large','Gộp map theo cây con, đếm màu, tần suất.','expert']
  ]],
  ['Truy vấn nâng cao trên cây',[
    ['Euler tour + segment tree','Cập nhật cây con, truy vấn đoạn tin/tout.','high'],
    ['Heavy-Light Decomposition','Phân rã nặng–nhẹ, truy vấn đường đi với segment tree.','expert'],
    ['Centroid decomposition','Chia cây theo trọng tâm, đếm đường đi.','expert'],
    ['DSU on tree','Sack, giữ dữ liệu cây con nặng, O(n log n).','expert'],
    ['Virtual tree','Cây ảo từ tập đỉnh quan trọng, LCA, DP.','expert'],
    ['Link-cut tree','Cây động, truy vấn đường đi, cập nhật (chuyên sâu).','expert'],
    ['Truy vấn đường đi nâng cao','Tổng/max/min trên đường, cập nhật điểm, HLD + BIT.','expert'],
    ['Cây có trọng số','Khoảng cách có trọng số, truy vấn cạnh, tiền tố gốc.','mid']
  ]]
]],
['07','Toán học cho CP','Số học, tổ hợp, bit, đại số tuyến tính, xác suất, trò chơi.',[
  ['Số học (Number Theory)',[
    ['GCD & LCM','Euclid, Euclid mở rộng, giải phương trình Diophantine.','core'],
    ['Số nguyên tố & sàng','Kiểm tra O(√n), sàng Eratosthenes, sàng tuyến tính.','core'],
    ['Phân tích thừa số','Thử chia, sàng SPF, Pollard Rho cho số 64-bit.','mid'],
    ['Modulo & lũy thừa nhanh','Binary exponentiation, xử lý số âm, modulo lớn.','core'],
    ['Nghịch đảo modulo','Định lý Fermat nhỏ, Euclid mở rộng, điều kiện tồn tại.','mid'],
    ['Phi hàm Euler','Công thức, tính nhanh bằng sàng, ứng dụng đếm.','mid'],
    ['CRT & CRT tổng quát','Hệ đồng dư, modulo không nguyên tố cùng nhau.','high'],
    ['Lucas & Wilson','Tổ hợp modulo nguyên tố nhỏ, định lý Wilson.','expert'],
    ['Miller-Rabin','Kiểm tra nguyên tố xác suất cho số 64-bit.','expert'],
    ['Căn nguyên thủy & log rời rạc','Bậc, phần tử sinh, baby-step giant-step.','expert'],
    ['Hàm Mobius & nghịch đảo','Sàng Mobius, đếm cặp nguyên tố cùng nhau.','expert'],
    ['Số học chia căn','Duyệt giá trị n/i, đếm ước, tổng hàm số học.','high'],
    ['Số lớn (Big Integer)','Cộng trừ nhân chia trên chuỗi, số hàng nghìn chữ số.','high'],
    ['Pell & phân số liên tục','Nghiệm phương trình Pell, xấp xỉ hữu tỉ (giới thiệu).','expert'],
    ['Sàng trên đoạn','Đếm nguyên tố trong [L, R] lớn, sàng với bộ nhớ nhỏ.','high'],
    ['Đếm & tổng ước','Sàng số ước, tổng ước, hàm sigma, ứng dụng đếm.','mid'],
    ['Căn bậc hai modulo','Tonelli-Shanks, thặng dư bậc hai (giới thiệu).','expert']
  ]],
  ['Tổ hợp & đếm',[
    ['Hoán vị, chỉnh hợp, tổ hợp','nPr, nCr, tam giác Pascal, tính modulo.','core'],
    ['Tổ hợp modulo','Giai thừa + nghịch đảo, nCr với n lớn, Lucas.','mid'],
    ['Nguyên lý bù trừ','Inclusion–exclusion, đếm phần bù, chia kẹo Euler.','high'],
    ['Catalan & Stirling','Dãy ngoặc, cây nhị phân, phân hoạch tập.','high'],
    ['Hàm sinh','OGF/EGF, đếm cấu hình, ứng dụng đa thức.','expert'],
    ['Burnside & Polya','Đếm đối xứng, nhóm hoán vị (giới thiệu).','expert'],
    ['Đếm bằng FFT/NTT','Tích chập, đếm cặp có tổng bằng k.','expert'],
    ['Đếm bằng DP & song ánh','Xây song ánh, đếm bằng hai cách, tránh đếm trùng.','high'],
    ['Tổ hợp nâng cao','Hệ số nhị thức âm, bốc bi, xếp chỗ.','high']
  ]],
  ['Bit & biểu diễn số',[
    ['Thao tác bit cơ bản','AND/OR/XOR/shift, kiểm tra/bật/tắt bit, lowbit.','core'],
    ['Bitmask & tập con','Duyệt tập con, submask, biểu diễn trạng thái.','mid'],
    ['XOR basis','Cơ sở tuyến tính trên GF(2), max XOR, đếm.','expert'],
    ['Gray code & đếm bit','Sinh Gray, đếm bit 1, __builtin_popcount.','mid'],
    ['Biểu diễn số & bù hai','Cơ số, chuyển đổi, số âm, tràn bit.','core'],
    ['Tối ưu bằng bit','Bitset DP, nén trạng thái, thao tác song song 64-bit.','high']
  ]],
  ['Đại số tuyến tính',[
    ['Ma trận & phép nhân','Nhân ma trận, lũy thừa, biểu diễn truy hồi.','mid'],
    ['Lũy thừa ma trận','Fibonacci lớn, đếm đường đi độ dài k, truy hồi.','high'],
    ['Khử Gauss','Giải hệ phương trình, hạng, nghịch đảo modulo.','high'],
    ['Định thức & matrix-tree','Đếm cây khung, định thức modulo.','expert'],
    ['GF(2) & hệ phương trình bit','Hệ trên GF(2), XOR basis, ứng dụng.','expert'],
    ['Nghịch đảo ma trận','Điều kiện khả nghịch, ứng dụng biến đổi.','high']
  ]],
  ['Xác suất & trò chơi',[
    ['Xác suất cơ bản','Không gian mẫu, biến cố, xác suất có điều kiện.','core'],
    ['Kỳ vọng tuyến tính','Tổng chỉ báo, DP kỳ vọng, bài toán tung xúc xắc.','high'],
    ['Phân phối thường gặp','Nhị thức, hình học, ứng dụng trong CP.','mid'],
    ['Markov chain & random walk','Kỳ vọng trên đồ thị, trạng thái hấp thụ, giải hệ.','expert'],
    ['Nim & Sprague-Grundy','Trò chơi tổng, mex, Grundy number.','high'],
    ['Trò chơi tổ hợp','DP trạng thái thắng/thua, trò chơi trên đồ thị, bốc bi.','high'],
    ['Trò chơi đối kháng','Minimax, alpha-beta (giới thiệu), trò chơi trên bảng.','high']
  ]],
  ['Đa thức & biến đổi',[
    ['FFT','Biến đổi Fourier nhanh, nhân đa thức O(n log n).','expert'],
    ['NTT','FFT trên modulo, căn nguyên thủy, modulus NTT.','expert'],
    ['Đa thức nâng cao','Nghịch đảo, log/exp, chia đa thức (chuyên sâu).','expert'],
    ['Ứng dụng FFT','Tích chập, đếm cặp, xử lý tín hiệu.','expert'],
    ['Tối ưu tổ hợp','Quy hoạch tuyến tính, simplex (giới thiệu).','expert']
  ]]
]],
['08','Chuỗi & hình học','So khớp, automaton, suffix array và hình học tính toán.',[
  ['Thuật toán chuỗi',[
    ['So khớp chuỗi cơ bản','Brute force O(nm), nhận diện khi nào đủ dùng.','core'],
    ['KMP','Prefix function, tìm mẫu, chu kỳ xâu, đếm xuất hiện.','high'],
    ['Z-function','Mảng Z, so khớp, đếm tiền tố, chu kỳ.','high'],
    ['Manacher','Palindrome dài nhất, bán kính, biến đổi xâu.','high'],
    ['Trie','Cây tiền tố, đếm, tìm kiếm, XOR max.','high'],
    ['Aho-Corasick','Automaton nhiều mẫu, đếm xuất hiện, DP trên automaton.','expert'],
    ['Suffix array','Xây O(n log n), LCP, đếm xâu con phân biệt.','expert'],
    ['Suffix automaton','Xây online, đếm xâu con, so khớp (chuyên sâu).','expert'],
    ['Palindromic tree','Eertree, đếm palindrome phân biệt (chuyên sâu).','expert'],
    ['Suffix tree & ứng dụng','Cây hậu tố, so khớp, đếm xâu con phân biệt (giới thiệu).','expert'],
    ['Lyndon & xoay xâu','Xoay nhỏ nhất, phân rã Lyndon (giới thiệu).','expert']
  ]],
  ['Hình học tính toán',[
    ['Vector & tích','Dot/cross, độ dài, góc, hướng quay, diện tích có dấu.','core'],
    ['Điểm & đường thẳng','Phương trình, khoảng cách, chiếu, phía của đường.','mid'],
    ['Đoạn thẳng & giao','Orientation, giao đoạn, giao đường, trường hợp suy biến.','mid'],
    ['Đa giác & diện tích','Shoelace, chu vi, đa giác lồi/lõm.','high'],
    ['Điểm trong đa giác','Ray casting, winding number, xử lý biên.','high'],
    ['Bao lồi (Convex hull)','Graham/Andrew, monotone chain, loại điểm thẳng hàng.','high'],
    ['Rotating calipers','Đường kính, cặp điểm xa nhất, hình chữ nhật bao.','expert'],
    ['Closest pair','Chia để trị O(n log n), sweep line.','high'],
    ['Sweep line hình học','Giao đoạn, diện tích hợp, đếm điểm.','high'],
    ['Đường tròn','Giao đường tròn, tiếp tuyến, bao tròn nhỏ nhất (giới thiệu).','high'],
    ['Tọa độ nguyên & sai số','Tránh double, dùng cross, epsilon, chuẩn hóa.','mid'],
    ['Half-plane intersection','Giao nửa mặt phẳng, đa giác lõi (chuyên sâu).','expert'],
    ['Hình học 3D','Vector 3D, mặt phẳng, bao lồi 3D (giới thiệu).','expert']
  ]]
]],
['09','Kỹ năng thi & luyện tập','Đọc đề, code, test, chiến thuật phòng thi và nguồn luyện.',[
  ['Kỹ năng giải bài',[
    ['Đọc đề & phân tích ràng buộc','Xác định input/output, giới hạn, biên, ví dụ nhỏ.','core'],
    ['Chọn hướng theo giới hạn','Từ n suy ra độ phức tạp cho phép, loại trừ hướng sai.','core'],
    ['Viết code sạch','Đặt tên, hàm nhỏ, tránh copy-paste, kiểm tra biên.','core'],
    ['Test tay & test biên','Test mẫu, nhỏ nhất, lớn nhất và các trường hợp đặc biệt.','mid'],
    ['Stress test & đối chiếu','Sinh test, so với brute force, thu nhỏ phản ví dụ.','mid'],
    ['Gỡ lỗi thường gặp','Overflow, off-by-one, RTE, TLE, MLE, sai kiểu dữ liệu.','core'],
    ['Upsolving','Giải lại bài sau contest, đọc editorial, ghi chú kỹ thuật mới.','core'],
    ['Ghi chú & ôn tập','Sổ tay thuật toán, template, lỗi đã mắc, ôn theo chu kỳ.','core']
  ]],
  ['Chiến thuật thi',[
    ['Quản lý thời gian','Phân bổ thời gian, bỏ bài quá khó, giữ bình tĩnh.','core'],
    ['Chiến thuật ICPC','Chia bài, penalty, đọc hết đề, chọn bài dễ trước.','mid'],
    ['Chiến thuật cá nhân','Thứ tự làm bài, kiểm tra trước khi nộp, quản lý nộp sai.','mid'],
    ['Virtual contest & đánh giá','Thống kê dạng bài yếu, lên kế hoạch luyện tập.','mid'],
    ['Chuẩn bị kỳ thi','Team, tài liệu, môi trường thi, tâm lý phòng thi.','core']
  ]],
  ['Nguồn luyện tập',[
    ['Codeforces','Div 2/3, EDU, gym; luyện theo rating và tag.','core'],
    ['AtCoder','ABC/ARC, đề chất lượng, luyện tư duy.','core'],
    ['CSES Problem Set','300 bài kinh điển theo chủ đề, nền tảng vững.','core'],
    ['USACO, VNOI & OLP','Luyện chuyên sâu, đề Việt Nam, chọn đội tuyển.','mid'],
    ['Sách & CP-Algorithms','Competitive Programmer Handbook, cp-algorithms, tài liệu chuyên Tin.','core']
  ]]
]]
];

var LEVELS = {
  core:  ['Cơ bản',    'core'],
  mid:   ['Trung bình','mid'],
  high:  ['Nâng cao',  'high'],
  expert:['Chuyên sâu','expert']
};

/* ---------- tiện ích ---------- */
function esc(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function norm(s){
  return String(s).toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
}
var usedKeys = {};
function uniqKey(s){
  var b = norm(s).replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'muc';
  var id = b, k = 2;
  while(usedKeys[id]) id = b + '-' + (k++);
  usedKeys[id] = 1;
  return id;
}

/* ---------- dựng cây ---------- */
var allNodes = [], itemNodes = [], byId = {};

var root = {
  kind:'root', id:'root', depth:0, open:true, children:[],
  title:'DSA & Competitive Programming',
  desc:'Từ số 0 đến ICPC'
};
allNodes.push(root); byId[root.id] = root;

ROADMAP.forEach(function(p, pi){
  var ph = {
    kind:'phase', id:'ph' + pi, depth:1, open:false, children:[],
    num:p[0], title:p[1], desc:p[2], parent:root
  };
  root.children.push(ph); allNodes.push(ph); byId[ph.id] = ph;

  p[3].forEach(function(g, gi){
    var gr = {
      kind:'group', id:'ph' + pi + 'g' + gi, depth:2, open:false, children:[],
      title:g[0], parent:ph
    };
    ph.children.push(gr); allNodes.push(gr); byId[gr.id] = gr;

    g[1].forEach(function(it, ii){
      var node = {
        kind:'item', id:'ph' + pi + 'g' + gi + 'i' + ii, depth:3, open:false, children:[],
        title:it[0], desc:it[1], lv:it[2], parent:gr
      };
      node.key = uniqKey(it[0]);
      node.search = norm(it[0] + ' ' + it[1] + ' ' + g[0] + ' ' + p[1]);
      gr.children.push(node); allNodes.push(node); byId[node.id] = node;
      itemNodes.push(node);
    });
  });
});

/* ---------- trạng thái ---------- */
var state = load();
function load(){
  try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
  catch(e){ return {}; }
}
function save(){
  try { localStorage.setItem(STORE, JSON.stringify(state)); } catch(e){}
  refreshDraft();
}

/* ---------- kích thước cột ---------- */
var COLS = [
  { x:0,   w:268 },  /* root  */
  { x:330, w:280 },  /* phase */
  { x:680, w:228 },  /* group */
  { x:960, w:366 }   /* item  */
];
var HS = [150, 120, 68, 112];
var VGAP = 13;
var EXTRA = [20, 16, 8];   /* khoảng thêm giữa các nhánh cùng cấp */

var vp       = document.getElementById('vp');
var stage    = document.getElementById('stage');
var svg      = document.getElementById('edges');
var nodesEl  = document.getElementById('nodes');
var hPct     = document.getElementById('hPct');
var hText    = document.getElementById('hText');
var hBar     = document.getElementById('hBar');
var zoomLbl  = document.getElementById('zoomLbl');
var searchEl = document.getElementById('search');

/* ---------- render từng loại ô ---------- */
function htmlOf(n){
  if(n.kind === 'root'){
    return '<div class="rk">Lộ trình cá nhân</div>' +
      '<div class="n-title">' + esc(n.title) + '</div>' +
      '<div class="n-desc">' + esc(n.desc) + '</div>' +
      '<div class="nmeta"><b class="rpct">0%</b><span class="bar"><i></i></span><span class="cnt">0/0</span></div>';
  }
  if(n.kind === 'phase'){
    return '<div class="prow"><span class="pnum">' + esc(n.num) + '</span>' +
      '<div class="pbody">' +
        '<div class="n-title">' + esc(n.title) + '<span class="chev">▾</span></div>' +
        '<div class="n-desc">' + esc(n.desc) + '</div>' +
        '<div class="nmeta"><span class="cnt">0/0</span><span class="bar"><i></i></span></div>' +
      '</div></div>';
  }
  if(n.kind === 'group'){
    return '<div class="n-title">' + esc(n.title) + '<span class="chev">▾</span></div>' +
      '<div class="nmeta"><span class="cnt">0/0</span><span class="bar"><i></i></span>' +
      '<button class="mark" type="button" title="Đánh dấu / bỏ đánh dấu cả nhóm">✓</button></div>';
  }
  var lv = LEVELS[n.lv] || LEVELS.core;
  return '<div class="ihead"><span class="pill"><span class="dot"></span><span class="lbl">None</span></span>' +
    '<span class="lvl lv-' + lv[1] + '">' + lv[0] + '</span></div>' +
    '<div class="n-title">' + esc(n.title) + '</div>' +
    '<div class="n-desc">' + esc(n.desc) + '</div>';
}

function mount(){
  var frag = document.createDocumentFragment();
  allNodes.forEach(function(n){
    var el = document.createElement('div');
    el.className = 'node n-' + n.kind + ' hidden';
    el.setAttribute('data-nid', n.id);
    el.style.width = COLS[n.depth].w + 'px';
    el.innerHTML = htmlOf(n);

    n.$el    = el;
    n.$count = el.querySelector('.cnt');
    n.$bar   = el.querySelector('.bar > i');
    n.$pct   = el.querySelector('.rpct');
    n.$pill  = el.querySelector('.pill');
    n.$chev  = el.querySelector('.chev');
    n.$mark  = el.querySelector('.mark');

    frag.appendChild(el);
  });
  nodesEl.appendChild(frag);

  /* đo chiều cao thật để bố cục sát nội dung */
  allNodes.forEach(function(n){ n.h = Math.ceil(n.$el.getBoundingClientRect().height) + 1; });
}

/* ---------- thống kê ---------- */
function totals(n){
  if(n.kind === 'item'){
    n.total = 1;
    n.done = state[n.key] ? 1 : 0;
    return;
  }
  n.total = 0; n.done = 0;
  for(var i = 0; i < n.children.length; i++){
    totals(n.children[i]);
    n.total += n.children[i].total;
    n.done  += n.children[i].done;
  }
}

function paint(){
  totals(root);

  itemNodes.forEach(function(n){
    var on = !!state[n.key];
    n.$el.classList.toggle('learned', on);
    n.$pill.querySelector('.lbl').textContent = on ? 'Learned' : 'None';
    n.$pill.setAttribute('aria-pressed', on ? 'true' : 'false');
  });

  allNodes.forEach(function(n){
    if(n.$count) n.$count.textContent = n.done + '/' + n.total;
    if(n.$bar) n.$bar.style.width = (n.total ? n.done / n.total * 100 : 0).toFixed(1) + '%';
    if(n.$mark) n.$mark.classList.toggle('done', n.total > 0 && n.done === n.total);
  });

  var pct = root.total ? Math.round(root.done / root.total * 100) : 0;
  if(root.$pct) root.$pct.textContent = pct + '%';
  hPct.textContent = pct + '%';
  hBar.style.width = pct + '%';
  hText.textContent = root.done + ' / ' + root.total + ' mục đã học';
}

/* ---------- lọc / tìm kiếm ---------- */
var filter = 'all';
var query = '';

function searchActive(){ return query.trim() !== ''; }

function computeVisible(){
  var q = norm(query.trim());
  (function visit(n){
    if(n.kind === 'item'){
      var on = !!state[n.key];
      var ok = filter === 'all' ||
               (filter === 'learned' && on) ||
               (filter === 'none' && !on);
      if(ok && q) ok = n.search.indexOf(q) !== -1;
      n.visible = ok;
      return ok;
    }
    var any = false;
    for(var i = 0; i < n.children.length; i++){
      if(visit(n.children[i])) any = true;
    }
    n.visible = n.children.length ? any : true;
    return n.visible;
  })(root);
}

function isOpen(n){
  if(!n.children.length) return false;
  return searchActive() ? true : !!n.open;
}

/* ---------- bố cục ---------- */
var bounds = { w: 0, h: 0 };
var visibleLayer = [];

function relayout(){
  computeVisible();
  document.body.classList.toggle('is-empty', !root.visible);

  var cursor = 0;
  visibleLayer = [];

  (function walk(node){
    node.w = COLS[node.depth].w;
    node.h = node.h || HS[node.depth];
    node.x = COLS[node.depth].x;

    var kids = [];
    if(isOpen(node)){
      for(var i = 0; i < node.children.length; i++){
        if(node.children[i].visible) kids.push(node.children[i]);
      }
    }
    node.kids = kids;
    visibleLayer.push(node);

    if(!kids.length){
      node.y = cursor;
      cursor += node.h + VGAP;
      return;
    }

    var top = cursor;
    for(var j = 0; j < kids.length; j++){
      if(j) cursor += EXTRA[node.depth] || 0;
      walk(kids[j]);
    }

    var first = kids[0], last = kids[kids.length - 1];
    node.y = (first.y + last.y + last.h) / 2 - node.h / 2;
    if(node.y < top) node.y = top;
    if(node.y + node.h + VGAP > cursor) cursor = node.y + node.h + VGAP;
  })(root);

  bounds.w = 0;
  visibleLayer.forEach(function(n){
    if(n.x + n.w > bounds.w) bounds.w = n.x + n.w;
  });
  bounds.w = Math.max(bounds.w, 1);
  bounds.h = Math.max(cursor, 1);

  var seen = {};
  visibleLayer.forEach(function(n){
    seen[n.id] = 1;
    var el = n.$el;
    el.style.width = n.w + 'px';
    el.style.height = n.h + 'px';
    el.style.transform = 'translate(' + n.x + 'px,' + n.y + 'px)';
    el.classList.remove('hidden');
    if(n.$chev) el.classList.toggle('closed', !isOpen(n));
  });
  allNodes.forEach(function(n){
    if(!seen[n.id]) n.$el.classList.add('hidden');
  });

  drawEdges();
}

function drawEdges(){
  var d = '';
  visibleLayer.forEach(function(n){
    if(!n.kids || !n.kids.length) return;
    var x1 = n.x + n.w, y1 = n.y + n.h / 2;
    n.kids.forEach(function(c){
      var x2 = c.x, y2 = c.y + c.h / 2;
      var mx = (x1 + x2) / 2;
      d += '<path class="e' + n.depth + '" d="M' + x1 + ' ' + y1 +
           ' C' + mx + ' ' + y1 + ',' + mx + ' ' + y2 + ',' + x2 + ' ' + y2 + '"/>';
    });
  });
  svg.innerHTML = d;
  svg.setAttribute('width', bounds.w);
  svg.setAttribute('height', bounds.h);
  svg.style.width = bounds.w + 'px';
  svg.style.height = bounds.h + 'px';
}

/* ---------- zoom / pan ---------- */
var k = 1, tx = 0, ty = 0;
var MIN_K = 0.04, MAX_K = 2.2;
var smoothTimer = null;
var interacted = false;

function smoothView(){
  stage.classList.add('smooth');
  clearTimeout(smoothTimer);
  smoothTimer = setTimeout(function(){ stage.classList.remove('smooth'); }, 420);
}

function applyView(){
  stage.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + k + ')';
  zoomLbl.textContent = Math.round(k * 100) + '%';
}

function zoomAt(px, py, f){
  var nk = Math.min(MAX_K, Math.max(MIN_K, k * f));
  var r = nk / k;
  tx = px - (px - tx) * r;
  ty = py - (py - ty) * r;
  k = nk;
  applyView();
}

function fit(){
  var vw = vp.clientWidth, vh = vp.clientHeight, pad = 46;
  var sw = Math.max(bounds.w, 1), sh = Math.max(bounds.h, 1);
  k = Math.min((vw - pad * 2) / sw, (vh - pad * 2) / sh, 1.05);
  k = Math.max(k, MIN_K);
  tx = (vw - sw * k) / 2;
  ty = (vh - sh * k) / 2;
  applyView();
}

/* đưa một nhánh vừa khung nhìn */
function frame(node){
  var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  (function walk(n){
    if(n.x < minX) minX = n.x;
    if(n.y < minY) minY = n.y;
    if(n.x + n.w > maxX) maxX = n.x + n.w;
    if(n.y + n.h > maxY) maxY = n.y + n.h;
    (n.kids || []).forEach(walk);
  })(node);
  if(!isFinite(minX)) return;

  var vw = vp.clientWidth, vh = vp.clientHeight, pad = 54;
  var w = Math.max(maxX - minX, 1), h = Math.max(maxY - minY, 1);
  var nk = Math.min((vw - pad * 2) / w, (vh - pad * 2) / h, 1.15);
  /* không thu nhỏ quá mức: nhánh dài thì neo ở góc trên và để người dùng kéo */
  nk = Math.max(nk, 0.8);

  smoothView();
  k = nk;
  tx = (w * nk <= vw - pad * 2) ? (vw - w * nk) / 2 - minX * nk : pad - minX * nk;
  ty = (h * nk <= vh - pad * 2) ? (vh - h * nk) / 2 - minY * nk : pad - minY * nk;
  applyView();
}

/* lần đầu: không thu nhỏ quá mức để chữ còn đọc được */
function initialView(){
  fit();
  if(k < 0.6){
    k = 0.6;
    var vw = vp.clientWidth, vh = vp.clientHeight;
    tx = (vw - bounds.w * k) / 2;
    ty = (vh - bounds.h * k) / 2;
    if(ty > 0) ty = Math.max(ty, 0);
    applyView();
  }
}

/* ---------- thao tác ---------- */
function toggleItem(n){
  if(state[n.key]) delete state[n.key];
  else state[n.key] = 1;
  save();
  paint();
  if(filter !== 'all') relayout();
}

function markGroup(g){
  var all = g.children.every(function(it){ return !!state[it.key]; });
  g.children.forEach(function(it){
    if(all) delete state[it.key];
    else state[it.key] = 1;
  });
  save();
  paint();
  if(filter !== 'all') relayout();
}

function setOpen(nodes, open){
  nodes.forEach(function(n){
    if(n.children.length) n.open = !!open;
  });
}

/* ---------- sự kiện ---------- */
var drag = null, ignoreClick = false;

vp.addEventListener('pointerdown', function(e){
  if(e.button !== 0) return;
  drag = { sx:e.clientX, sy:e.clientY, tx:tx, ty:ty, moved:false, id:e.pointerId };
});window.addEventListener('pointermove', function(e){
  if(!drag || e.pointerId !== drag.id) return;
  var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
  if(!drag.moved && Math.abs(dx) + Math.abs(dy) > 5){
    drag.moved = true;
    interacted = true;
    vp.classList.add('dragging');
  }
  if(drag.moved){
    tx = drag.tx + dx;
    ty = drag.ty + dy;
    applyView();
  }
});
window.addEventListener('pointerup', function(e){
  if(!drag) return;
  if(drag.moved){
    ignoreClick = true;
    setTimeout(function(){ ignoreClick = false; }, 0);
  }
  vp.classList.remove('dragging');
  drag = null;
});
window.addEventListener('pointercancel', function(){
  drag = null;
  vp.classList.remove('dragging');
});

vp.addEventListener('wheel', function(e){
  e.preventDefault();
  interacted = true;
  var r = vp.getBoundingClientRect();
  zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * 0.0016));
}, { passive:false });

vp.addEventListener('dblclick', function(e){
  if(e.target.closest('.node, .controls')) return;
  fit();
});

nodesEl.addEventListener('click', function(e){
  if(ignoreClick) return;
  var el = e.target.closest('.node');
  if(!el) return;
  var n = byId[el.getAttribute('data-nid')];
  if(!n) return;

  if(e.target.closest('.mark')){ markGroup(n); return; }

  if(n.kind === 'item'){ toggleItem(n); return; }

  interacted = true;

  if(n.kind === 'root'){
    var anyOpen = root.children.some(function(p){ return p.open; });
    root.children.forEach(function(p){ p.open = !anyOpen; });
    relayout();
    smoothView();
    fit();
    return;
  }

  n.open = !n.open;
  relayout();
  if(n.open) frame(n);
});

document.getElementById('filters').addEventListener('click', function(e){
  var b = e.target.closest('button[data-filter]');
  if(!b) return;
  this.querySelectorAll('button').forEach(function(x){ x.classList.remove('active'); });
  b.classList.add('active');
  filter = b.getAttribute('data-filter');
  relayout();
  paint();
});

var searchTimer = null;
searchEl.addEventListener('input', function(){
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function(){
    query = searchEl.value;
    relayout();
    document.body.classList.toggle('is-empty', !root.visible);
  }, 110);
});

document.getElementById('zoomIn').addEventListener('click', function(){
  interacted = true;
  zoomAt(vp.clientWidth / 2, vp.clientHeight / 2, 1.2);
});
document.getElementById('zoomOut').addEventListener('click', function(){
  interacted = true;
  zoomAt(vp.clientWidth / 2, vp.clientHeight / 2, 1 / 1.2);
});
document.getElementById('fitBtn').addEventListener('click', function(){ smoothView(); fit(); });

document.getElementById('expandBtn').addEventListener('click', function(){
  interacted = true;
  setOpen(allNodes, true);
  relayout();
  smoothView();
  fit();
});
document.getElementById('collapseBtn').addEventListener('click', function(){
  interacted = true;
  setOpen(allNodes, false);
  relayout();
  smoothView();
  fit();
});
document.getElementById('resetBtn').addEventListener('click', function(){
  if(!confirm('Đặt toàn bộ ' + Object.keys(state).length + ' mục đã đánh dấu về None?')) return;
  Object.keys(state).forEach(function(key){ delete state[key]; });
  save();
  paint();
  relayout();
});

document.addEventListener('keydown', function(e){
  var tag = document.activeElement ? document.activeElement.tagName : '';
  if(e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA'){
    e.preventDefault();
    searchEl.focus();
  }
  if(e.key === 'Escape' && document.activeElement === searchEl){
    searchEl.value = '';
    query = '';
    searchEl.blur();
    relayout();
    document.body.classList.remove('is-empty');
  }
});

/* ============================================================
   ADMIN — đăng nhập GitHub, sửa tiến độ dạng Draft,
   Discard (huỷ) và Publish progress.json qua GitHub API.

   BẢO MẬT: token chỉ nằm trong biến GH.token (RAM của tab).
   Không hardcode, không localStorage/sessionStorage, không cookie,
   không đưa vào DOM sau khi đăng nhập.
   ============================================================ */
var CFG_KEY = 'cp-roadmap-admin-cfg';
var GH = {
  api: 'https://api.github.com',
  token: '',
  cfg: { owner:'vuduykhoaxd', repo:'Competitive-Programming', branch:'main', path:'Knowledge/progress.json' },
  published: null,   /* learned map tại lần đọc/publish gần nhất */
  sha: null,
  busy: false
};

var adminBtn    = document.getElementById('adminBtn');
var adminBar    = document.getElementById('adminBar');
var adminRepo   = document.getElementById('adminRepo');
var adminDraft  = document.getElementById('adminDraft');
var adminDlg    = document.getElementById('adminDlg');
var loginForm   = document.getElementById('loginForm');
var tokenInput  = document.getElementById('tokenInput');
var ownerInput  = document.getElementById('ownerInput');
var repoInput   = document.getElementById('repoInput');
var branchInput = document.getElementById('branchInput');
var pathInput   = document.getElementById('pathInput');
var rememberCfg = document.getElementById('rememberCfg');
var loginErr    = document.getElementById('loginErr');
var loginSubmit = document.getElementById('loginSubmit');
var publishBtn  = document.getElementById('publishBtn');
var discardBtn  = document.getElementById('discardBtn');
var logoutBtn   = document.getElementById('logoutBtn');
var toastsEl    = document.getElementById('toasts');

function cfgLoad(){
  try{
    var c = JSON.parse(localStorage.getItem(CFG_KEY) || 'null');
    if(!c) return;
    ['owner','repo','branch','path'].forEach(function(k){
      if(typeof c[k] === 'string' && c[k]) GH.cfg[k] = c[k];
    });
  }catch(e){}
}
function cfgSave(){
  try{ localStorage.setItem(CFG_KEY, JSON.stringify(GH.cfg)); }catch(e){}
}

function toast(msg, kind){
  if(!toastsEl) return;
  var el = document.createElement('div');
  el.className = 'toast ' + (kind || '');
  el.textContent = msg;
  toastsEl.appendChild(el);
  requestAnimationFrame(function(){ el.classList.add('show'); });
  setTimeout(function(){
    el.classList.remove('show');
    setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 250);
  }, kind === 'err' ? 6500 : 3600);
}

function encSeg(s){ return encodeURIComponent(s); }
function filePath(){
  return GH.cfg.path.split('/').filter(function(x){ return x !== ''; }).map(encSeg).join('/');
}
function contentsUrl(){
  return GH.api + '/repos/' + encSeg(GH.cfg.owner) + '/' + encSeg(GH.cfg.repo) + '/contents/' + filePath();
}
function rawUrl(){
  return 'https://raw.githubusercontent.com/' + encSeg(GH.cfg.owner) + '/' + encSeg(GH.cfg.repo) +
    '/' + encSeg(GH.cfg.branch) + '/' + filePath();
}

function b64encode(str){
  var bytes = new TextEncoder().encode(str), bin = '';
  for(var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}
function b64decode(b64){
  var bin = atob(String(b64).replace(/\s+/g, ''));
  var bytes = new Uint8Array(bin.length);
  for(var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

/* đọc progress.json (chấp nhận cả định dạng cũ: map phẳng slug -> true) */
function progressFromText(txt){
  var data;
  try{ data = JSON.parse(txt) || {}; }
  catch(e){ throw new Error('progress.json không phải JSON hợp lệ'); }
  var src = (data && typeof data.learned === 'object' && data.learned) ? data.learned : null;
  if(!src){
    src = {};
    Object.keys(data || {}).forEach(function(k){
      if(data[k] === true) src[k] = true;
    });
  }
  var out = {};
  Object.keys(src).forEach(function(k){ if(src[k]) out[k] = 1; });
  return out;
}

function learnedMap(){
  var out = {};
  Object.keys(state).forEach(function(k){ if(state[k]) out[k] = 1; });
  return out;
}

function progressText(){
  var learned = {};
  Object.keys(learnedMap()).sort().forEach(function(k){ learned[k] = true; });
  return JSON.stringify({
    version: 1,
    updatedAt: new Date().toISOString(),
    updatedBy: 'roadmap-admin',
    learned: learned
  }, null, 2) + '\n';
}

function errText(e){
  if(!e) return 'Lỗi không xác định.';
  if(e.name === 'AbortError') return 'Hết thời gian chờ GitHub (20 giây).';
  switch(e.status){
    case 401: return 'Token không hợp lệ hoặc đã hết hạn (401).';
    case 403: return 'Token không đủ quyền hoặc bị chặn (403). Cần quyền Contents: Read and write.';
    case 404: return 'Không tìm thấy repo / branch / file (404).';
    case 409: return 'Xung đột SHA — file vừa bị thay đổi (409).';
    case 422: return 'GitHub từ chối cập nhật (422): ' + (e.message || '');
    case 429: return 'Bị giới hạn tần suất gọi API (429), thử lại sau.';
  }
  return (e.status ? '(' + e.status + ') ' : '') + (e.message || 'Lỗi mạng');
}

/* gọi GitHub API: token chỉ gắn vào header của request, không lưu lại */
async function ghFetch(url, opts){
  opts = opts || {};
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, 20000);
  var headers = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };
  if(opts.headers) Object.keys(opts.headers).forEach(function(k){ headers[k] = opts.headers[k]; });
  if(GH.token) headers['Authorization'] = 'Bearer ' + GH.token;

  try{
    var res = await fetch(url, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body,
      signal: ctrl.signal,
      cache: 'no-store'
    });
    var text = await res.text();
    var data = null;
    try{ data = text ? JSON.parse(text) : null; }catch(e){ data = null; }
    if(!res.ok){
      var err = new Error((data && data.message) || ('HTTP ' + res.status));
      err.status = res.status;
      throw err;
    }
    return data;
  } finally {
    clearTimeout(timer);
  }
}

/* đọc file trên GitHub; 404 => coi như file chưa tồn tại (publish sẽ tạo mới) */
async function ghRead(){
  try{
    var d = await ghFetch(contentsUrl());
    if(Array.isArray(d)) throw new Error('Đường dẫn đang trỏ tới một thư mục, cần trỏ tới file JSON.');
    if(d && d.type && d.type !== 'file') throw new Error('Đường dẫn không phải file.');
    var txt = d && d.content ? b64decode(d.content) : '';
    return { sha: (d && d.sha) || null, learned: progressFromText(txt || '{}'), exists: true };
  }catch(e){
    if(e.status === 404) return { sha: null, learned: {}, exists: false };
    throw e;
  }
}

function showLoginErr(msg){
  if(!loginErr) return;
  loginErr.textContent = msg || '';
  loginErr.hidden = !msg;
}

function setBusy(on){
  GH.busy = on;
  if(loginSubmit) loginSubmit.disabled = on;
  if(publishBtn) publishBtn.disabled = on;
}

function refreshDraft(){
  if(!GH.token || !adminDraft) return;
  var n = diffCount();
  adminDraft.textContent = n ? ('Draft · ' + n + ' thay đổi chưa publish') : 'Không có thay đổi';
  adminDraft.className = n ? 'dirty' : 'clean';
  if(publishBtn) publishBtn.disabled = GH.busy;
}

function diffCount(){
  if(!GH.published) return 0;
  var a = learnedMap(), b = GH.published, n = 0;
  Object.keys(a).forEach(function(k){ if(!b[k]) n++; });
  Object.keys(b).forEach(function(k){ if(!a[k]) n++; });
  return n;
}

function setAdminUI(){
  var on = !!GH.token;
  if(adminBtn){
    adminBtn.classList.toggle('on', on);
    adminBtn.textContent = on ? '⚿ Admin ●' : '⚿ Admin';
  }
  if(adminBar) adminBar.hidden = !on;
  if(on && adminRepo){
    adminRepo.textContent = GH.cfg.owner + '/' + GH.cfg.repo + ' · ' + GH.cfg.branch + ' · ' + GH.cfg.path;
    adminRepo.title = adminRepo.textContent;
  }
  refreshDraft();
}

function openLogin(){
  if(!adminDlg) return;
  showLoginErr('');
  ownerInput.value  = GH.cfg.owner;
  repoInput.value   = GH.cfg.repo;
  branchInput.value = GH.cfg.branch;
  pathInput.value   = GH.cfg.path;
  tokenInput.value  = '';
  if(typeof adminDlg.showModal === 'function'){
    if(!adminDlg.open) adminDlg.showModal();
  } else {
    adminDlg.setAttribute('open', '');
  }
  setTimeout(function(){ tokenInput.focus(); }, 30);
}

function closeLogin(){
  if(!adminDlg) return;
  if(typeof adminDlg.close === 'function' && adminDlg.open) adminDlg.close();
  else adminDlg.removeAttribute('open');
}

async function doLogin(ev){
  if(ev) ev.preventDefault();
  if(GH.busy) return;

  var token = tokenInput.value.trim();
  tokenInput.value = '';            /* không giữ token trong DOM */
  if(!token){ showLoginErr('Chưa nhập token.'); return; }

  var cfg = {
    owner:  ownerInput.value.trim().replace(/^\/+|\/+$/g, ''),
    repo:   repoInput.value.trim().replace(/^\/+|\/+$/g, ''),
    branch: branchInput.value.trim() || 'main',
    path:   pathInput.value.trim().replace(/^\/+/, '')
  };
  if(!cfg.owner || !cfg.repo || !cfg.path){
    showLoginErr('Owner, repo và đường dẫn không được để trống.');
    return;
  }

  var prevCfg = { owner: GH.cfg.owner, repo: GH.cfg.repo, branch: GH.cfg.branch, path: GH.cfg.path };

  setBusy(true);
  showLoginErr('');
  GH.token = token;
  GH.cfg = cfg;
  try{
    var repoInfo = await ghFetch(GH.api + '/repos/' + encSeg(cfg.owner) + '/' + encSeg(cfg.repo));
    if(repoInfo && repoInfo.permissions && repoInfo.permissions.push === false){
      throw new Error('Token không có quyền ghi vào repo này.');
    }
    var file = await ghRead();

    GH.sha = file.sha;
    GH.published = file.learned;

    if(rememberCfg && rememberCfg.checked) cfgSave();

    closeLogin();
    setAdminUI();
    toast('Đăng nhập thành công. Chỉnh tiến độ rồi bấm Publish.', 'ok');
    if(!file.exists) toast('Chưa có ' + cfg.path + ' trên GitHub — lần Publish đầu sẽ tạo file mới.', 'warn');
  }catch(e){
    GH.token = '';
    GH.cfg = prevCfg;
    showLoginErr(errText(e));
  }finally{
    setBusy(false);
  }
}

async function doPublish(){
  if(!GH.token || GH.busy) return;
  setBusy(true);
  publishBtn.textContent = 'Đang publish…';

  var text = progressText();
  var attempt = 0;

  try{
    while(true){
      attempt++;
      try{
        var payload = {
          message: 'chore(progress): publish ' + Object.keys(learnedMap()).length + ' mục đã học',
          content: b64encode(text),
          branch: GH.cfg.branch
        };
        if(GH.sha) payload.sha = GH.sha;

        var res = await ghFetch(contentsUrl(), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        GH.sha = (res && res.content && res.content.sha) || GH.sha;
        GH.published = learnedMap();
        toast('Đã publish progress.json lên GitHub.', 'ok');
        break;
      }catch(e){
        /* xung đột SHA: đọc lại sha mới rồi thử lại (draft của mình vẫn là bản ghi) */
        if((e.status === 409 || e.status === 422) && attempt <= 3){
          toast('Xung đột SHA — đang đọc lại và thử lại (' + attempt + '/3)…', 'warn');
          var fresh = await ghRead();
          GH.sha = fresh.sha;
          continue;
        }
        throw e;
      }
    }
  }catch(e){
    toast(errText(e), 'err');
  }finally{
    setBusy(false);
    publishBtn.textContent = 'Publish';
    refreshDraft();
  }
}

function doDiscard(){
  if(!GH.token) return;
  var n = diffCount();
  if(n && !confirm('Bỏ ' + n + ' thay đổi chưa publish và quay về bản trên GitHub?')) return;

  state = {};
  Object.keys(GH.published || {}).forEach(function(k){ state[k] = 1; });

  save();
  paint();
  if(filter !== 'all') relayout();
  refreshDraft();
  toast(n ? 'Đã huỷ draft, quay về bản đã publish.' : 'Không có thay đổi để huỷ.');
}

function doLogout(){
  GH.token = '';
  GH.published = null;
  GH.sha = null;
  closeLogin();
  setAdminUI();
  toast('Đã đăng xuất. Tiến độ vẫn giữ trong localStorage.', 'ok');
}

/* khách (chưa đăng nhập): đọc bản đã publish và hợp nhất vào localStorage,
   chỉ thêm chứ không xoá => dữ liệu cũ luôn được bảo toàn */
async function guestSync(){
  if(GH.token) return;
  try{
    var res = await fetch(rawUrl(), { cache: 'no-store' });
    if(!res.ok) return;
    var txt = await res.text();
    if(!txt || txt.charAt(0) !== '{') return;

    var learned = progressFromText(txt);
    var changed = false;
    Object.keys(learned).forEach(function(k){
      if(!state[k]){ state[k] = 1; changed = true; }
    });
    if(changed){
      save();
      paint();
      if(filter !== 'all') relayout();
    }
  }catch(e){ /* offline / repo private / CORS: bỏ qua, app vẫn chạy bằng localStorage */ }
}

adminBtn.addEventListener('click', function(){
  if(GH.token){
    toast('Đang đăng nhập ' + GH.cfg.owner + '/' + GH.cfg.repo + ' — dùng Publish / Discard trên thanh Admin.');
    return;
  }
  openLogin();
});
loginForm.addEventListener('submit', doLogin);
document.getElementById('loginCancel').addEventListener('click', closeLogin);
adminDlg.addEventListener('click', function(e){ if(e.target === adminDlg) closeLogin(); });

publishBtn.addEventListener('click', doPublish);
discardBtn.addEventListener('click', doDiscard);
logoutBtn.addEventListener('click', doLogout);

/* ---------- khởi động ---------- */
cfgLoad();
mount();
paint();
relayout();
setAdminUI();
requestAnimationFrame(function(){
  initialView();
  requestAnimationFrame(function(){ document.body.classList.remove('booting'); });
});
setTimeout(function(){ initialView(); }, 120);
guestSync();

/* nếu khung nhìn đổi kích thước (thanh công cụ xuống dòng, phóng to trình duyệt…) thì canh lại */
if('ResizeObserver' in window){
  var vpRO = new ResizeObserver(function(){
    if(!interacted) initialView();
  });
  vpRO.observe(vp);
}

})();
