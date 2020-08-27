#include <algorithm>
#include <utility>

using namespace std;

class Solution {
public:
    bool checkIfCanBreak(string s1, string s2) {
      sort(s1.begin(), s1.end());
      sort(s2.begin(), s2.end());
      
      int a = 0;
      int b = 0;
      
      for (int i = 0;i < s1.length(); i++) {
        if (s1[i] >= s2[i]) {
          a++;
        }
        
        if (s1[i] <= s2[i]) {
          b++;
        }
      }
      
      if (a == s1.length() || b == s1.length()) return true;
      return false;
    }
};
