#include<stdio.h>
#include<math.h>
#include<stdlib.h>

//游戏抽象见我写的word文档 

//整体思路，1将所有虚线变实 ，2找出所有联通片 ，3判断哪个联通片是被圈区域 

struct Node{
	int base;    //实色 
	int face;    //虚色 
	int flag;    // 联通片的标记（1就是属于一号联通片，以此类推） 。只用于本次算法执行，此数据不用传递 
};
Node node [10][10];
int Flag[100];   //第i个联通片是否是领地内的标记，为0则是 
int nodeflag_num; //联通片数量的计数 


//----此处请理解清楚我说的话 ------
/*
首先 ，四个边界什么情况下会变成自己的领土：一定是虚线走过，然后在虚线变实的时候。 （思考一下就能明白）
然后，怎么判断是否是闭联通片：只要能抵达外部就不是；所以只要能搜索到边界区即为不是闭联通片。 
*/ 


void test(int x,int y)              //从（x，y）向四周探索，探索本联通片 所有节点 
{
	 
	if(node[x][y].base==1)          //碰到自己的边，回退 
	return ;
	if(node[x][y].flag!=0)         //避免重复搜索，node.flag已标记区不搜索 
	return ;
	if(x==0||x==9||y==0||y==9)     //能到达边界，则不是闭联通片 
	{
		Flag[nodeflag_num]=1;
		return ;
	}
	node[x][y].flag=nodeflag_num;  
	//向四周探索 
	test(x-1,y);
	test(x+1,y);
	test(x,y-1);
	test(x,y+1);
	return ; 
}
 
int main()
{
	int i ,j;
	int lenth_x,lenth_y;   //大小，按游戏画面修改即可（注意，此处不是像素，是小方格） 
	lenth_x=10;
	lenth_y=10;
	FILE *fp=NULL;
	//初始化（每次被触发都要执行） 
	for(i=0;i<100;i++)
		Flag[i]=0;
	for(i=0;i<lenth_x;i++)
		for(j=0;j<lenth_y;j++)
			node[i][j].flag=0;
	nodeflag_num=1;
	
	
	// 传入数据base 和face ，并将所有虚线涂实且清除虚线 
	fp=fopen("input.txt","r");
	for(i=0;i<lenth_x;i++)
		for(j=0;j<lenth_y;j++)
			fscanf(fp,"%d",&node[i][j].base);
	for(i=0;i<lenth_x;i++)
		for(j=0;j<lenth_y;j++)
		{
			fscanf(fp,"%d",&node[i][j].face);
			if(node[i][j].face==1)
			{
				node[i][j].base=1;
				node[i][j].face=0;
			}
		}
	fclose(fp);		
	
	//从第一往最后一个 
	for(i=1;i<lenth_x-1;i++)          
		for(j=1;j<lenth_y-1;j++)
		{
			if(node[i][j].base==0&&node[i][j].flag==0)//若未涂实色且不属于之前任何联通片，从此点搜索新联通片 
			{
				test(i,j);
				nodeflag_num++;				//联通片数+1 
			}
		}
	
	/*	
	for(i=0;i<lenth_x;i++)
	{
		for(j=0;j<lenth_y;j++)
			printf("%d\t",node[i][j].flag);
		printf("\n");
	}
	for(i=1;i<nodeflag_num;i++)
		printf("%d %d\n",i,Flag[i]);	
	*/ 
	
	
	//将所有闭联通片涂实 
	for(i=1;i<lenth_x-1;i++)
		for(j=1;j<lenth_y-1;j++)
		{
			if(node[i][j].flag!=0&&Flag[node[i][j].flag]==0)
			{
				node[i][j].base=1;
				node[i][j].face=0;
			}
		}
	
	for(i=0;i<lenth_x;i++)
	{
		for(j=0;j<lenth_y;j++)
			printf("%d\t",node[i][j].base);
		printf("\n");
	}
	return 0;
} 
