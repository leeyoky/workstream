<template>
    <div class="index-box">
        <div class="board-title">
            <p>주소록</p>
            <hr>
        </div>
        <!-- 검색 창 -->
        <div class="board-search-wrapper">
            <div class="board-search-tag">
                <label for="name">이름</label>
                <input type="text" name="name" v-model="name" placeholder="이름"> 
            </div>
            <div class="board-search-tag">
                <label for="department">부서</label>
                <input type="text" name="department" v-model="department" placeholder="부서"> 
            </div>
            <div class="board-search-tag">
                <label for="email">이메일</label>
                <input style= "width:10rem;" type="text" name="email" v-model="email" placeholder="이메일"> 
            </div>
            <div class="board-search-tag">
                <label for="phone">핸드폰</label>
                <input type="text" name="phone" v-model="phone" placeholder="핸드폰"> 
            </div>
            <div class="board-search-tag">
                <button class="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
        <!-- board -->
        <div class="board-wrapper">
            <table class="table-board">
                <tr class="table-hover">
                    <th>이름</th>
                    <th>부서</th>
                    <th>직책</th>
                    <th>직위</th>
                    <th>내선</th>
                    <th>핸드폰</th>
                    <th>Email</th>
                    <th>자택번호</th>
                    <th>입사일</th>
                    <th>생일</th>
                    <th>소속그룹</th>
                    <th>현재프로젝트</th>
                </tr>
                <tr>
                    <td>강이지</td>
                    <td>KM</td>
                    <td>본부장</td>
                    <td>전무</td>
                    <td>104</td>
                    <td>010-1004-1004</td>
                    <td>easy.kang</td>
                    <td></td>
                    <td>1993-01-01</td>
                    <td>1/1</td>
                    <td>PM</td>
                    <td>차세대 워크스트림</td>
                </tr>
                <tr>
                    <td>김춘배</td>
                    <td>마케팅</td>
                    <td>그룹장</td>
                    <td>상무</td>
                    <td></td>
                    <td>010-8888-8888</td>
                    <td>figther.bae</td>
                    <td></td>
                    <td>2011-12-21</td>
                    <td>3/24</td>
                    <td>분석</td>
                    <td>대외홍보</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        
    }
}
</script>

<style scoped>
.board-search-wrapper{
    width: 90%;
    height: 4rem;
    display: flex;
    margin: 0 auto;
    margin-bottom: 3rem;
    margin-top: 1.5rem;
    border: 1px solid rgb(221, 221, 221);
    /* background-color: rgb(255, 255, 255); */
    /* border-radius: 10px; */
    /* box-shadow: 5px 2px 5px 2px rgb(231, 231, 231); */
    font-size: 10pt;
    justify-content: center;
}
.board-wrapper{
    width: 90%;
    height: 40rem;
    margin: 0 auto;
}
.board-search-tag{
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
}
.board-search-wrapper input {
    background-color: rgb(247, 247, 247);
    border: 1px gainsboro solid;
    padding: 5px 10px 4px 10px;
    width: 6rem;
    height: 1.5rem;
    border-radius: 5px;
}
.board-search-wrapper input::placeholder{
    color: rgb(168, 168, 168);
    font-size: 9pt;
}
.board-search-wrapper label {
    height: 2rem;
    display: flex;
    align-items: center;
    padding-right: 1rem;
}
.table-board{
    width: 100%;
    text-align: center;
    border-spacing: 0;
}
.table-board th {
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
    padding:3px 3px;
    font-size: 10pt;
    font-weight: 700;
}
.table-board td {
    font-size: 10pt;    
    font-weight: 300;
    padding: 5px 0px;
}
table tr:hover {
    background-color: rgb(245, 245, 245);
}
</style>