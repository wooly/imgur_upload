FasdUAS 1.101.10   ��   ��    l      ����  i         I     �� ��
�� .aevtoappnull  �   � ****  o      ���� 0 argv  ��    k     t    	 
 	 l     ��������  ��  ��   
     O         r        ?        l    ����  I   �� ��
�� .corecnte****       ****  l    ����  6       2    ��
�� 
prcs  =       1   	 ��
�� 
pnam  m       �    G r o w l H e l p e r A p p��  ��  ��  ��  ��    m    ����    o      ���� 0 	isrunning 	isRunning  m       �                                                                                  sevs   alis    z  easel                      ��]�H+     tSystem Events.app                                                ���oB.        ����  	                CoreServices    ��]�      �oB.       t   0   /  3easel:System:Library:CoreServices:System Events.app   $  S y s t e m   E v e n t s . a p p    e a s e l  -System/Library/CoreServices/System Events.app   / ��        l   ��������  ��  ��         Z    r ! "���� ! o    ���� 0 	isrunning 	isRunning " O    n # $ # k   " m % %  & ' & l  " "�� ( )��   ( 1 + Make a list of all the notification types     ) � * * V   M a k e   a   l i s t   o f   a l l   t h e   n o t i f i c a t i o n   t y p e s   '  + , + l  " "�� - .��   - ' ! that this script will ever send:    . � / / B   t h a t   t h i s   s c r i p t   w i l l   e v e r   s e n d : ,  0 1 0 r   " ' 2 3 2 l 	 " % 4���� 4 J   " % 5 5  6�� 6 m   " # 7 7 � 8 8  F i l e   u p l o a d e d��  ��  ��   3 l      9���� 9 o      ���� ,0 allnotificationslist allNotificationsList��  ��   1  : ; : l  ( (��������  ��  ��   ;  < = < l  ( (�� > ?��   > ( " Make a list of the notifications     ? � @ @ D   M a k e   a   l i s t   o f   t h e   n o t i f i c a t i o n s   =  A B A l  ( (�� C D��   C - ' that will be enabled by default.          D � E E N   t h a t   w i l l   b e   e n a b l e d   b y   d e f a u l t .             B  F G F l  ( (�� H I��   H 9 3 Those not enabled by default can be enabled later     I � J J f   T h o s e   n o t   e n a b l e d   b y   d e f a u l t   c a n   b e   e n a b l e d   l a t e r   G  K L K l  ( (�� M N��   M 7 1 in the 'Applications' tab of the growl prefpane.    N � O O b   i n   t h e   ' A p p l i c a t i o n s '   t a b   o f   t h e   g r o w l   p r e f p a n e . L  P Q P r   ( - R S R l 	 ( + T���� T J   ( + U U  V�� V m   ( ) W W � X X  F i l e   u p l o a d e d��  ��  ��   S l      Y���� Y o      ���� 40 enablednotificationslist enabledNotificationsList��  ��   Q  Z [ Z l  . .��������  ��  ��   [  \ ] \ l  . .�� ^ _��   ^ &   Register our script with growl.    _ � ` ` @   R e g i s t e r   o u r   s c r i p t   w i t h   g r o w l . ]  a b a l  . .�� c d��   c 7 1 You can optionally (as here) set a default icon     d � e e b   Y o u   c a n   o p t i o n a l l y   ( a s   h e r e )   s e t   a   d e f a u l t   i c o n   b  f g f l  . .�� h i��   h ' ! for this script's notifications.    i � j j B   f o r   t h i s   s c r i p t ' s   n o t i f i c a t i o n s . g  k l k I  . ;���� m
�� .registernull��� ��� null��   m �� n o
�� 
appl n l 	 0 1 p���� p m   0 1 q q � r r  I m a g e   U p l o a d��  ��   o �� s t
�� 
anot s l 
 2 3 u���� u o   2 3���� ,0 allnotificationslist allNotificationsList��  ��   t �� v��
�� 
dnot v l 
 4 5 w���� w o   4 5���� 40 enablednotificationslist enabledNotificationsList��  ��  ��   l  x y x l  < <�� z {��   z  	Send a Notification...    { � | | . 	 S e n d   a   N o t i f i c a t i o n . . . y  } ~ } l   < <��  ���    � ~notify with name item 2 of argv �
				title item 3 of argv �
				description item 4 of argv �
				application name "dznr wdgt"    � � � � � n o t i f y   w i t h   n a m e   i t e m   2   o f   a r g v   � 
 	 	 	 	 t i t l e   i t e m   3   o f   a r g v   � 
 	 	 	 	 d e s c r i p t i o n   i t e m   4   o f   a r g v   � 
 	 	 	 	 a p p l i c a t i o n   n a m e   " d z n r   w d g t " ~  � � � l  < <��������  ��  ��   �  ��� � I  < m���� �
�� .notifygrnull��� ��� null��   � �� � �
�� 
name � n   @ F � � � l 	 A F ����� � 4   A F�� �
�� 
cobj � m   D E���� ��  ��   � o   @ A���� 0 argv   � �� � �
�� 
iurl � n   I O � � � l 	 J O ����� � 4   J O�� �
�� 
cobj � m   M N���� ��  ��   � o   I J���� 0 argv   � �� � �
�� 
titl � n   R X � � � l 	 S X ����� � 4   S X�� �
�� 
cobj � m   V W���� ��  ��   � o   R S���� 0 argv   � �� � �
�� 
desc � n   [ c � � � l 	 \ c ����� � 4   \ c�� �
�� 
cobj � m   _ b���� ��  ��   � o   [ \���� 0 argv   � �� ���
�� 
appl � m   d g � � � � �  I m a g e   U p l o a d��  ��   $ m     � �t                                                                                  GRRR   alis       easel                      ��]�H+     GrowlHelperApp.app                                             ����            ����  A                 ��]�              &  G r o w l H e l p e r A p p . a p p    e a s e l  Applications/GrowlHelperApp.app   / ��  ��  ��      ��� � l  s s��������  ��  ��  ��  ��  ��       �� � ��� � ���   � ��������
�� .aevtoappnull  �   � ****�� 0 	isrunning 	isRunning�� ,0 allnotificationslist allNotificationsList�� 40 enablednotificationslist enabledNotificationsList � �� ���� � ���
�� .aevtoappnull  �   � ****�� 0 argv  ��   � ���� 0 argv   �  �� ��� ���� � 7�� W���� q��������������~�}�| ��{�z
�� 
prcs �  
�� 
pnam
�� .corecnte****       ****�� 0 	isrunning 	isRunning�� ,0 allnotificationslist allNotificationsList�� 40 enablednotificationslist enabledNotificationsList
�� 
appl
�� 
anot
�� 
dnot�� 
�� .registernull��� ��� null
�� 
name
�� 
cobj
� 
iurl
�~ 
titl
�} 
desc�| �{ 

�z .notifygrnull��� ��� null�� u� *�-�[�,\Z�81j jE�UO� U� M�kvE�O�kvE�O*������a  O*a �a l/a �a k/a �a m/a �a a /�a a  UY hOP
�� boovfals � �y ��y  �   7 � �x ��x  �   Wascr  ��ޭ